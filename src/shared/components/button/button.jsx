import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import './button.sass';

const Button = ({ children, href, className, standard, fluid, variant, size, isDisabled, ...otherProps }) => {
  const classes = classNames({
    'button': standard !== false,
    'button--disabled': isDisabled,
    'button--fluid': fluid,
    [`button--${variant}`]: variant,
    [`button--${size}`]: size,
    [className]: className
  });

  const Tag = href ? 'a' : 'button';

  return (
    <Tag href={href} className={classes} {...otherProps} disabled={!href && isDisabled}>
      {children}
    </Tag>
  );
};

Button.defaultProps = {
  isDisabled: false,
  fluid: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  fluid: PropTypes.bool,
  standard: PropTypes.bool,
  variant: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
};

export default Button;
