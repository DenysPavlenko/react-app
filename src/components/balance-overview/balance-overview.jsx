import React from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types';
// Components
import BalanceItem from 'components/balance-item/balance-item';
// Styles
import './balance-overview.sass';

const balance = [
  { title: 'Balance', total: '-74' },
  { title: 'Pending', total: '120' },
  { title: 'Available', total: '160' },
  { title: 'Free play', total: '0' },
];

const BalanceOverview = ({ noFreePlay, noBalance, shrinkOnMobile, vertical, className, ...otherProps }) => {
  const classes = classNames({
    'balance-overview': true,
    'balance-overview--vertical': vertical,
    'balance-overview--mob-shrink': shrinkOnMobile,
    [className]: className
  });

  return (
    <div className={classes} {...otherProps}>
      {balance
        .filter((arr) => {
          if (!noFreePlay && !noBalance) { return true; }
          if (noFreePlay && arr.title !== 'Free play') { return true; }
          if (noBalance && arr.title !== 'Balance') { return true; }
        })
        .map(({ title, total }, idx) => (
          <div className="balance-overview__item">
            <BalanceItem key={idx} title={title} total={`$${total}`} negative={total < 0} />
          </div>
        ))}
    </div>
  );
};

BalanceOverview.defaultProps = {
  noFreePlay: false,
  noBalance: false,
  shrinkOnMobile: false,
  vertical: false,
};

BalanceOverview.propTypes = {
  noFreePlay: PropTypes.bool,
  shrinkOnMobile: PropTypes.bool,
  vertical: PropTypes.bool,
  noBalance: PropTypes.bool,
  className: PropTypes.string,
};

export default BalanceOverview;
