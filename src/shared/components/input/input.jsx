import React, { forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import './input.sass';

const Input = forwardRef(({ className, standard, size, noRadius, isInvalid, variant, ...otherProps }, ref) => {
  const classes = classNames({
    'input': standard !== false,
    'input--no-radius': noRadius,
    'input--invalid': isInvalid,
    [`input--${variant}`]: variant,
    [`input--${size}`]: size,
    [className]: className
  });

  return (
    <input className={classes} {...otherProps} ref={ref} />
  );
});

Input.propTypes = {
  className: PropTypes.string,
  noRadius: PropTypes.bool,
  isInvalid: PropTypes.bool,
};

export default Input;
