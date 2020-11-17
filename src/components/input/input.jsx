import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import './input.sass';

const Input = ({ className, standard, noRadius, isInvalid, ...otherProps }) => {
  const classes = classNames({
    'input': standard !== false,
    'input--no-radius': noRadius,
    'input--invalid': isInvalid,
    [className]: className
  });

  return (
    <input className={classes} {...otherProps} />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  noRadius: PropTypes.bool,
  isInvalid: PropTypes.bool,
};

export default Input;
