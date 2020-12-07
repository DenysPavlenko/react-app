import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Componets
import Typography from 'shared/components/typography/typography';
// Styles
import './balance-item.sass';

const BalanceItem = ({ title, total, loading, error, className }) => {
  const classes = classNames({
    'balance-item': true,
    [className]: className
  });

  return (
    <div className={classes}>
      <Typography component="h5" className="balance-item__title text-uppercase">{title}</Typography>
      <Typography component="h5" className={total < 0 ? 'text-danger' : ''}>
        {error && <Typography component="span" className="text-danger">...</Typography>}
        {(!error && loading) && '...'}
        {(!error && !loading) && `$${total}`}
      </Typography>
    </div>
  );
};

BalanceItem.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  title: PropTypes.string,
  total: PropTypes.string,
  className: PropTypes.string,
};

export default BalanceItem;
