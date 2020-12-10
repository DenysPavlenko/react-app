import React, { forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import './textarea.sass';

const Textarea = forwardRef(({ className, isInvalid, variant, noPadding, ...otherProps }, ref) => {
  const classes = classNames({
    'textarea': true,
    'textarea--invalid': isInvalid,
    [`textarea--${variant}`]: variant,
    'textarea--p-0': noPadding,
    [className]: className
  });

  return (
    <textarea className={classes} {...otherProps} ref={ref} />
  );
});

Textarea.propTypes = {
  className: PropTypes.string,
  isInvalid: PropTypes.bool,
};

export default Textarea;