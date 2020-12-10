import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'shared/redux/color-scheme/selectors';
// Styles
import './button.sass';

const Button = ({ children, href, className, standard, fluid, variant, size, isDisabled, iconStart, iconEnd, isActive, colorScheme, onClick }) => {
  const classes = classNames({
    'button': standard,
    'button--disabled': standard && isDisabled,
    'button--fluid': fluid,
    'is-active': isActive,
    [`button--${variant}`]: variant,
    [`button--${size}`]: size,
    [`theme-${colorScheme}`]: colorScheme,
    [className]: className
  });

  const Tag = href ? 'a' : 'button';

  return (
    <Tag href={href} className={classes} disabled={!href && isDisabled} onClick={onClick}>
      {iconStart && <div className="button__icon">{iconStart}</div>}
      {children}
      {iconEnd && <div className="button__icon">{iconEnd}</div>}
    </Tag>
  );
};

Button.defaultProps = {
  standard: true,
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
  iconStart: PropTypes.node,
  iconEnd: PropTypes.node,
  href: PropTypes.string,
  colorScheme: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  colorScheme: selectColorScheme
});

export default connect(mapStateToProps)(Button);
