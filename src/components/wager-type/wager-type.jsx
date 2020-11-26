import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'redux/color-scheme/selectors';
// Styles
import './wager-type.sass';

const WagerType = ({ type, title, icon, defaultColorScheme, isActive, className, ...otherProps }) => {
  const classes = classNames({
    'wager-type': true,
    'is-active': isActive,
    [`wager-type--${defaultColorScheme}`]: defaultColorScheme,
    [className]: className
  });

  return (
    <div className={classes} {...otherProps}>
      <span className="wager-type__char">{title[0]}</span>
      <span className="wager-type__title">{title}</span>
    </div>
  );
};

WagerType.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  defaultColorScheme: PropTypes.string,
  className: PropTypes.string,
  isActive: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  defaultColorScheme: selectColorScheme
});

export default connect(mapStateToProps)(WagerType);
