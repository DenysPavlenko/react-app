import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchAdminBalanceData } from 'admin-app/redux/admin-balance/actions';
import { selectAdminBalance } from 'admin-app/redux/admin-balance/selectors';
// Components
import BalanceItem from 'shared/components/balance-item/balance-item';

const AdminBalance = ({ fetchAdminBalanceData, adminBalance: { loading, data, error } }) => {

  useLayoutEffect(() => {
    fetchAdminBalanceData();
  }, [fetchAdminBalanceData, ]);

  return (
    <BalanceItem title="balance" total={data && data.balance} loading={loading} error={error} />
  );
};

AdminBalance.propTypes = {
  fetchAdminBalanceData: PropTypes.func,
  adminBalance: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  adminBalance: selectAdminBalance
});

const mapDispatchToProps = dispatch => ({
  fetchAdminBalanceData: () => dispatch(fetchAdminBalanceData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminBalance);
