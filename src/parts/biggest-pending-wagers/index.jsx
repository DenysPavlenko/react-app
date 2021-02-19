import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { biggestPendingWagersRequested } from 'redux/biggest-pending-wagers/actions';
import { selectBiggestPendingWagers } from 'redux/biggest-pending-wagers/selectors';
// Components
import PrimaryTable from 'components/primary-table';
import Typography from 'components/typography';
// Table content
import tableContent from './table-content';
// Styles
import './styles.sass';

const BiggestPendingWagers = ({ biggestPendingWagersRequested, biggestPendingWagers: { loading, data, error } }) => {
  useLayoutEffect(() => {
    biggestPendingWagersRequested();
  }, [biggestPendingWagersRequested]);

  return (
    <div className="biggest-pending-wagers">
      <div className="biggest-pending-wagers__heading">
        <Typography component="h2">Biggest Pending Wagers</Typography>
      </div>
      <PrimaryTable
        cols={tableContent()}
        loading={loading}
        data={data}
        error={error}
        retry={biggestPendingWagersRequested}
      />
    </div>
  );
};

BiggestPendingWagers.propTypes = {
  biggestPendingWagersRequested: PropTypes.func,
  selectBiggestPendingWagers: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  biggestPendingWagers: selectBiggestPendingWagers
});

const mapDispatchToProps = {
  biggestPendingWagersRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(BiggestPendingWagers);
