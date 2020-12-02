import React, { useLayoutEffect } from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { fetchBalanceData } from 'redux/balance/actions';
import { selectBalance } from 'redux/balance/selectors';
// Components
import BalanceItem from 'components/balance-item/balance-item';
// Styles
import './balance-overview.sass';

const BalanceOverview = ({ shrinkOnMobile, vertical, className, fetchBalanceData, balance, balance: { loading, data, error }, history }) => {
  useLayoutEffect(() => {
    fetchBalanceData();
  }, [fetchBalanceData]);

  const classes = classNames({
    'balance-overview': true,
    'balance-overview--vertical': vertical,
    'balance-overview--mob-shrink': shrinkOnMobile,
    [className]: className
  });

  return (
    <div className={classes} onClick={() => history.push('/balance')}>
      <BalanceItem className="balance-overview__item" title="balance" total={data && data.balance} error={error} loading={loading} />
      <BalanceItem className="balance-overview__item" title="pending" total={data && data.pending} error={error} loading={loading} />
      <BalanceItem className="balance-overview__item" title="available" total={data && data.available} error={error} loading={loading} />
      <BalanceItem className="balance-overview__item" title="free play" total={data && data.freePlay} error={error} loading={loading} />
    </div>
  );
};

BalanceOverview.propTypes = {
  shrinkOnMobile: PropTypes.bool,
  vertical: PropTypes.bool,
  className: PropTypes.string,
  balance: PropTypes.object,
  fetchBalanceData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  balance: selectBalance,
});

const mapDispatchToProps = dispatch => ({
  fetchBalanceData: () => dispatch(fetchBalanceData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BalanceOverview));
