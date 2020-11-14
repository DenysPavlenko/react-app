import React from 'react';
import PropTypes from 'prop-types';
// Styles
import './balance-item.sass';

const BalanceItem = ({ title, total, negative, ...otherProps }) => {
  return (
    <div className="balance-item" {...otherProps}>
      <span className="balance-item__title">{title}</span>
      <span className={`balance-item__total ${negative ? 'balance-item__total--danger' : ''}`}>{total}</span>
    </div>
  );
};

BalanceItem.defaultProps = {
  negative: false,
};

BalanceItem.propTypes = {
  negative: PropTypes.bool,
  title: PropTypes.string,
  total: PropTypes.string,
};

export default BalanceItem;
