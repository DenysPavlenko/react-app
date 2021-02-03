import React, { forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import './styles.sass';

const Textarea = forwardRef(({ className, invalid, variant, noPadding, ...otherProps }, ref) => {
  const classes = classNames({
    'textarea': true,
    'textarea--invalid': invalid,
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
  invalid: PropTypes.bool,
};

export default Textarea;
