import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchBiggestPendingWagersData } from 'admin-app/redux/biggest-pending-wagers/actions';
import { selectBiggestPendingWagers } from 'admin-app/redux/biggest-pending-wagers/selectors';
// Components
import PrimaryTable from 'shared/components/primary-table';
import Typography from 'shared/components/typography';
// Table content
import tableContent from './table-content';
// Styles
import './styles.sass';

const BiggestPendingWagers = ({ fetchBiggestPendingWagersData, biggestPendingWagers: { loading, data, error } }) => {
  useLayoutEffect(() => {
    fetchBiggestPendingWagersData();
  }, [fetchBiggestPendingWagersData]);

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
        retry={fetchBiggestPendingWagersData}
      />
    </div>
  );
};

BiggestPendingWagers.propTypes = {
  fetchBiggestPendingWagersData: PropTypes.func,
  selectBiggestPendingWagers: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  biggestPendingWagers: selectBiggestPendingWagers
});

const mapDispatchToProps = dispatch => ({
  fetchBiggestPendingWagersData: () => dispatch(fetchBiggestPendingWagersData())
});

export default connect(mapStateToProps, mapDispatchToProps)(BiggestPendingWagers);
