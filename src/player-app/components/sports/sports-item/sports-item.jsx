import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import Typography from 'shared/components/typography/typography';
// Styles
import './sports-item.sass';

const SportsItem = ({ info, position, children, pushTop, pushBottom, colorScheme, isActive, onClick }) => {
  const classes = classNames({
    'sports-item': true,
    'sports-item--push-top': pushTop,
    'sports-item--push-bottom': pushBottom,
    'is-active': isActive,
    [`theme-${colorScheme}`]: colorScheme
  });

  return (
    <div className={classes} onClick={onClick}>
      <Typography component="span" variant="p-sm" className="sports-item__title">{children}</Typography>
      <Typography component="span" className="sports-item__info" style={position}>{info}</Typography>
    </div>
  );
};

SportsItem.propTypes = {
  info: PropTypes.string,
  position: PropTypes.object,
  pushTop: PropTypes.bool,
  pushBottom: PropTypes.bool,
  colorScheme: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export default SportsItem;
