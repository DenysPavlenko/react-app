import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
// Redux
import { selectUserBalance } from 'shared/redux/user/selectors';
// Components
import BalanceItem from 'shared/components/balance-item/balance-item';

const AdminBalance = ({ balance: { total } }) => {
  return (
    <BalanceItem title="balance" total={total} loading={!total} />
  );
};

AdminBalance.propTypes = {
  balance: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  balance: selectUserBalance
});

export default connect(mapStateToProps)(AdminBalance);
