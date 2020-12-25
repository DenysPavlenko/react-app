import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './action-icon.sass';

const ActionIcon = ({ icon, color, className, ...otherProps }) => {
  const classes = classNames({
    'action-icon': true,
    [`action-icon--${color}`]: color,
    [className]: className
  });

  return (
    <FontAwesomeIcon className={classes} icon={icon} {...otherProps} />
  );
};

ActionIcon.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default ActionIcon;
