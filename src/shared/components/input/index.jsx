import React, { forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import './styles.sass';

const Input = forwardRef(({ className, standard, size, noRadius, invalid, variant, width, disabled, ...otherProps }, ref) => {
  const classes = classNames({
    'input': standard !== false,
    'input--no-radius': noRadius,
    'input--invalid': invalid,
    [`input--${variant}`]: variant,
    [`input--${size}`]: size,
    [`input--width-${width}`]: width,
    [className]: className
  });

  return (
    <input className={classes} {...otherProps} ref={ref} disabled={disabled} />
  );
});

Input.propTypes = {
  className: PropTypes.string,
  noRadius: PropTypes.bool,
  standard: PropTypes.bool,
  size: PropTypes.string,
  variant: PropTypes.string,
  width: PropTypes.string,
  invalid: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default Input;
