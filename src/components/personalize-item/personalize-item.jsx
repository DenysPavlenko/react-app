import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { setColorScheme } from 'redux/color-scheme/actions';
import { selectColorScheme } from 'redux/color-scheme/selectors';
// Styles
import './personalize-item.sass';

const PersonalizeItem = ({ title, color, className, setColorScheme, defaultColorScheme, ...otherProps }) => {
  const classes = classNames({
    'personalize-item': true,
    [`personalize-item--${color}`]: color,
    'is-active': defaultColorScheme === color,
    [className]: className
  });

  return (
    <div className={classes} {...otherProps} onClick={() => { setColorScheme(color); }}>
      <div className="personalize-item__title">{title}</div>
      <div className="personalize-item__color"></div>
    </div>
  );
};

PersonalizeItem.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  setColorScheme: PropTypes.func,
  color: PropTypes.string,
  defaultColorScheme: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  defaultColorScheme: selectColorScheme
});

const mapDispatchToProps = dispatch => ({
  setColorScheme: (color) => dispatch(setColorScheme(color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalizeItem);
