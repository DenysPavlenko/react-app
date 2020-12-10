import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'shared/redux/color-scheme/selectors';
// Components
import Typography from 'shared/components/typography/typography';
import Checkbox from 'shared/components/checkbox/checkbox';
// Styles
import './sports-schedule-list-item.sass';

const SportsScheduleListItem = ({ title, colorScheme, isActive, className, onClick, onChange }) => {
  const classes = classNames({
    'sports-schedule-list-item': true,
    [`theme-${colorScheme}`]: colorScheme,
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
  colorScheme: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  colorScheme: selectColorScheme,
});


export default connect(mapStateToProps)(SportsScheduleListItem);