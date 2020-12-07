import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchBalanceData } from 'admin-app/redux/balance/actions';
import { selectBalance } from 'admin-app/redux/balance/selectors';
// Components
import BalanceItem from 'shared/components/balance-item/balance-item';

const Balance = ({ fetchBalanceData, balance: { loading, data, error } }) => {

  useLayoutEffect(() => {
    fetchBalanceData();
  }, [fetchBalanceData])

  return (
    <BalanceItem title="balance" total={data && data.balance} loading={loading} error={error} ></BalanceItem>
  );
};

Balance.propTypes = {
  fetchBalanceData: PropTypes.func,
  balance: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  balance: selectBalance
});

const mapDispatchToProps = dispatch => ({
  fetchBalanceData: () => dispatch(fetchBalanceData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Balance);
