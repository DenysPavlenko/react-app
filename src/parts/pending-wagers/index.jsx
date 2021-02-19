import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { pendingWagersRequested } from 'redux/pending-wagers/actions';
import { selectPendingWagers } from 'redux/pending-wagers/selectors';
// Components
import Table from 'components/table';
import Typography from 'components/typography';
import PendingWagersHeader from './pending-wagers-header';
import PendingWagersItem from './pending-wagers-item';
import ErrorIndicator from 'components/error-indicator';
import Spinner from 'components/spinner/spinner';
// Utils
import getTotal from 'utils/get-total';
// Styles
import './styles.sass';

const PendingWagers = ({ pendingWagers: { loading, data, error }, pendingWagersRequested }) => {
  useLayoutEffect(() => {
    pendingWagersRequested();
  }, [pendingWagersRequested]);

  const totalRisk = data && getTotal(data, 'risk').toString();
  const totalWin = data && getTotal(data, 'toWin').toString();

  return (
    <div className="pending-wagers">
      <Typography component="h2" className="pending-wagers__heading">Pending wagers</Typography>
      {error && <div className="pending-wagers__indicator"><ErrorIndicator retry={pendingWagersRequested} light /></div>}
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
                <PendingWagersItem
                  className="pending-wagers__table-item"
                  title="Total:"
                  risk={totalRisk}
                  toWin={totalWin}
                />
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
  pendingWagersRequested: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  pendingWagers: selectPendingWagers,
});

const mapDispatchToProps = {
  pendingWagersRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(PendingWagers);
