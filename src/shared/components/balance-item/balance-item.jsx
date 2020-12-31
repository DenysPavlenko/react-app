import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Componets
import Typography from 'shared/components/typography/typography';
// Utils
import handleStatusClass from 'shared/utils/handle-status-class';
// Styles
import './balance-item.sass';

const BalanceItem = ({ title, total, loading, className, noDollar }) => {
  const classes = classNames({
    'balance-item': true,
    [className]: className
  });

  return (
    <div className={classes}>
      <Typography component="h5" className="balance-item__title text-uppercase">{title}</Typography>
      <Typography component="h5" className={handleStatusClass(total)}>
        {loading && '...'}
        {!loading && `${noDollar ? '' : '$'}${total}`}
      </Typography>
    </div>
  );
};

BalanceItem.defaultProps = {
  loading: false,
  error: false,
  noDollar: false,
};

BalanceItem.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  title: PropTypes.string,
  total: PropTypes.string,
  className: PropTypes.string,
  noDollar: PropTypes.bool,
};

export default BalanceItem;
