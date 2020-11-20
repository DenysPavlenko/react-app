import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'redux/color-scheme/selectors';
// Components
import Typography from 'components/typography/typography';
import Checkbox from 'components/checkbox/checkbox';
// Styles
import './sports-schedule-list-item.sass';

const SportsScheduleListItem = ({ title, defaultColorScheme, isActive, className, onClick, onChange }) => {
  const classes = classNames({
    'sports-schedule-list-item': true,
    [`sports-schedule-list-item--${defaultColorScheme}`]: defaultColorScheme,
    'is-active': isActive,
    [className]: className
  });

  return (
    <div className={classes} onClick={onClick}>
      <Checkbox checked={isActive} onChange={onChange} className="sports-schedule-list-item__checkbox" />
      <Typography component="span" variant="p" className={`${isActive ? 'text-light' : 'text-dark'}`}>{title}</Typography>
    </div>
  )
};

SportsScheduleListItem.defaultProps = {
  onChange: () => { },
};

SportsScheduleListItem.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  defaultColorScheme: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  defaultColorScheme: selectColorScheme,
});


export default connect(mapStateToProps)(SportsScheduleListItem);
