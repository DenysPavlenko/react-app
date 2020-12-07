import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'shared/redux/color-scheme/selectors';
// Styles
import './wager-type.sass';

const WagerType = ({ title, defaultColorScheme, isActive, className, onClick }) => {
  const classes = classNames({
    'wager-type': true,
    'is-active': isActive,
    [`theme-${defaultColorScheme}`]: defaultColorScheme,
    [className]: className
  });

  return (
    <div className={classes} onClick={onClick}>
      <span className="wager-type__char">{title[0]}</span>
      <span className="wager-type__title">{title}</span>
    </div>
  );
};

WagerType.propTypes = {
  title: PropTypes.string,
  defaultColorScheme: PropTypes.string,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  defaultColorScheme: selectColorScheme
});

export default connect(mapStateToProps)(WagerType);
