import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Components
import Typography from 'components/typography/typography';
// Styles
import './sports-table-item.sass'

const SportsTableItem = ({ title, info, infoPosition, infoLeft, onClick }) => {
  const infoClasses = classNames({
    'sports-table-item__info': true,
    'sports-table-item__info--left': infoLeft,
    [`sports-table-item__info--${infoPosition}`]: infoPosition,
  });

  return (
    <div className="sports-table-item" onClick={onClick}>
      <Typography component="span" variant="p-sm">{title}</Typography>
      <Typography className={infoClasses}>{info}</Typography>
    </div>
  );
};

SportsTableItem.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  infoPosition: PropTypes.string,
  infoLeft: PropTypes.bool,
  onClick: PropTypes.func,
};

export default SportsTableItem;
