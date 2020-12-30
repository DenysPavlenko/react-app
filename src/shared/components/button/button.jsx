import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'shared/redux/color-scheme/selectors';
// Styles
import './button.sass';

const Button = ({ children, href, className, standard, fluid, variant, size, disabled, iconStart, iconEnd, isActive, colorScheme, onClick, style }) => {
  const classes = classNames({
    'button': standard,
    'button--disabled': standard && disabled,
    'button--fluid': fluid,
    'is-active': isActive,
    [`button--${variant}`]: variant,
    [`button--${size}`]: size,
    [`theme-${colorScheme}`]: colorScheme,
    [className]: className
  });

  const Tag = href ? 'a' : 'button';

  return (
    <Tag href={href} className={classes} disabled={!href && disabled} onClick={onClick} style={style}>
      {iconStart && <div className="button__icon">{iconStart}</div>}
      <span>{children}</span>
      {iconEnd && <div className="button__icon">{iconEnd}</div>}
    </Tag>
  );
};

Button.defaultProps = {
  standard: true,
  disabled: false,
  fluid: false,
};

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  fluid: PropTypes.bool,
  standard: PropTypes.bool,
  variant: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  iconStart: PropTypes.node,
  iconEnd: PropTypes.node,
  href: PropTypes.string,
  colorScheme: PropTypes.string,
  style: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  colorScheme: selectColorScheme
});

export default connect(mapStateToProps)(Button);
