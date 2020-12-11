import React, { forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import './input.sass';

const Input = forwardRef(({ className, standard, size, noRadius, isInvalid, variant, width, ...otherProps }, ref) => {
  const classes = classNames({
    'input': standard !== false,
    'input--no-radius': noRadius,
    'input--invalid': isInvalid,
    [`input--${variant}`]: variant,
    [`input--${size}`]: size,
    [`input--width-${width}`]: width,
    [className]: className
  });

  return (
    <input className={classes} {...otherProps} ref={ref} />
  );
});

Input.propTypes = {
  className: PropTypes.string,
  noRadius: PropTypes.bool,
  standard: PropTypes.bool,
  size: PropTypes.string,
  variant: PropTypes.string,
  width: PropTypes.string,
  isInvalid: PropTypes.bool,
};

export default Input;
