import React from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectUserBalance } from 'shared/redux/user/selectors';
// Components
import BalanceItem from 'shared/components/balance-item';
// Styles
import './styles.sass';

const Balance = ({ shrinkOnMobile, vertical, className, balance: { total, pending, available, freePlay }, history }) => {

  const classes = classNames({
    'balance': true,
    'balance--vertical': vertical,
    'balance--mob-shrink': shrinkOnMobile,
    [className]: className
  });

  return (
    <div className={classes} onClick={() => history.push('/balance')}>
      <BalanceItem className="balance__item" title="balance" total={total} loading={!total} />
      <BalanceItem className="balance__item" title="pending" total={pending} loading={!pending} />
      <BalanceItem className="balance__item" title="available" total={available} loading={!available} />
      <BalanceItem className="balance__item" title="free play" total={freePlay} loading={!freePlay} />
    </div>
  );
};

Balance.propTypes = {
  shrinkOnMobile: PropTypes.bool,
  vertical: PropTypes.bool,
  className: PropTypes.string,
  balance: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  balance: selectUserBalance,
});

export default connect(mapStateToProps)(withRouter(Balance));
