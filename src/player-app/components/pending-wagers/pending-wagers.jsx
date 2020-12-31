import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { fetchPendingWagersData } from 'player-app/redux/pending-wagers/actions';
import { selectPendingWagers, selectTotalRisk, selectTotalWin } from 'player-app/redux/pending-wagers/selectors';
// Components
import Table from 'shared/components/table/table';
import Typography from 'shared/components/typography/typography';
import PendingWagersHeader from './pending-wagers-header/pending-wagers-header';
import PendingWagersItem from './pending-wagers-item/pending-wagers-item';
import ErrorIndicator from 'shared/components/error-indicator/error-indicator';
import Spinner from 'shared/components/spinner/spinner';
// Styles
import './pending-wagers.sass';

const PendingWagers = ({ pendingWagers: { loading, data, error }, fetchPendingWagersData, totalRisk, totalWin }) => {
  useLayoutEffect(() => {
    fetchPendingWagersData();
  }, [fetchPendingWagersData]);

  return (
    <div className="pending-wagers">
      <Typography component="h2" className="pending-wagers__heading">Pending wagers</Typography>
      {error && <div className="pending-wagers__indicator"><ErrorIndicator retry={fetchPendingWagersData} light /></div>}
      {(!error && loading) && <div className="pending-wagers__indicator"><Spinner boxed light /></div>}
      {(!error && !loading) &&
        <>
          <div className="pending-wagers__table-wrap">
            <Table className="pending-wagers__table">
              <PendingWagersHeader />
              <tbody>
                {data.map((props) => (
                  <PendingWagersItem className="pending-wagers__table-item" key={props.id}  {...props} />
                ))}
              </tbody>
              <tbody>
                <PendingWagersItem className="pending-wagers__table-item" title="Total:" risk={totalRisk} toWin={totalWin} />
              </tbody>
            </Table>
          </div>
        </>
      }
    </div>
  );
};

PendingWagers.propTypes = {
  pendingWagers: PropTypes.object,
  totalRisk: PropTypes.number,
  totalWin: PropTypes.number,
  fetchPendingWagersData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  pendingWagers: selectPendingWagers,
  totalRisk: selectTotalRisk,
  totalWin: selectTotalWin,
});

const mapDispatchToProps = dispatch => ({
  fetchPendingWagersData: () => dispatch(fetchPendingWagersData())
});

export default connect(mapStateToProps, mapDispatchToProps)(PendingWagers);
