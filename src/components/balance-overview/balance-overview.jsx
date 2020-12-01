import React from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types';
// Components
import BalanceItem from 'components/balance-item/balance-item';
// Styles
import './balance-overview.sass';

const balance = [
  { title: 'balance', total: '-74' },
  { title: 'pending', total: '120' },
  { title: 'available', total: '160' },
  { title: 'free play', total: '0' },
];

const BalanceOverview = ({ shrinkOnMobile, vertical, className, ...otherProps }) => {
  const classes = classNames({
    'balance-overview': true,
    'balance-overview--vertical': vertical,
    'balance-overview--mob-shrink': shrinkOnMobile,
    [className]: className
  });

  return (
    <div className={classes} {...otherProps}>
      {balance.map(({ title, total }, idx) => (
        <div key={idx} className="balance-overview__item">
          <BalanceItem title={title} total={`$${total}`} negative={total < 0} />
        </div>
      ))}
    </div>
  );
};

BalanceOverview.defaultProps = {
  shrinkOnMobile: false,
  vertical: false,
};

BalanceOverview.propTypes = {
  shrinkOnMobile: PropTypes.bool,
  vertical: PropTypes.bool,
  className: PropTypes.string,
};

export default BalanceOverview;
