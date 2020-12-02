import React from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
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

const BalanceOverview = ({ shrinkOnMobile, vertical, className, history }) => {
  console.log('history:', history)
  const classes = classNames({
    'balance-overview': true,
    'balance-overview--vertical': vertical,
    'balance-overview--mob-shrink': shrinkOnMobile,
    [className]: className
  });

  return (
    <div className={classes} onClick={() => history.push('/balance')}>
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
  history: PropTypes.object,
  className: PropTypes.string,
};

export default withRouter(BalanceOverview);
