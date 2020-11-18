import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './wager-type.sass';

const WagerType = ({ type, title, icon, background, isActive, className, ...otherProps }) => {
  const classes = classNames({
    'wager-type': true,
    'is-active': isActive,
    [`wager-type--${background}`]: background,
    [className]: className
  });

  return (
    <div className={classes} {...otherProps}>
      {icon ?
        <FontAwesomeIcon className="wager-type__icon" icon={icon} />
        :
        <span className="wager-type__letter">{title[0].toUpperCase()}</span>
      }
      <span className="wager-type__title">{title}</span>
    </div>
  );
};

WagerType.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  background: PropTypes.string,
  className: PropTypes.string,
  isActive: PropTypes.bool,
};

export default WagerType;
