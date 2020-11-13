import React from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types';
// Styles
import './button.sass';

const Button = ({ children, href, className, fluid, isDisabled, ...otherProps }) => {
  const classes = classNames({
    'button': true,
    'button-disabled': isDisabled,
    'button-fluid': fluid,
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
  className: PropTypes.string,
  href: PropTypes.string,
};

export default Button;
