import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'redux/color-scheme/selectors';
import { selectSportsScheduleEvent } from 'redux/sports-schedule-event/selectors';
import { setSportsScheduleEvent } from 'redux/sports-schedule-event/actions';
// Components
import Typography from 'components/typography/typography';
import Checkbox from 'components/checkbox/checkbox';

const Item = ({ title, event, defaultColorScheme, sportsScheduleEvent, setSportsScheduleEvent }) => {
  const isActive = sportsScheduleEvent === event;
  const classes = classNames({
    'sports-schedule-item': true,
    [`sports-schedule-item--${defaultColorScheme}`]: defaultColorScheme,
    'is-active': isActive,
  });

  return (
    <div className={classes} onClick={() => setSportsScheduleEvent(event)}>
      <div className="sports-schedule-item__heading">
        <Checkbox className="sports-schedule-item__checkbox" checked={isActive} />
        <Typography component="p" className={`sports-schedule-item__title mb-0 ${isActive ? 'text-light': 'text-dark'}`}>{title}</Typography>
      </div>
    </div>
  )
};

Item.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  defaultColorScheme: PropTypes.string,
  sportsScheduleEvent: PropTypes.string,
  setSportsScheduleEvent: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  defaultColorScheme: selectColorScheme,
  sportsScheduleEvent: selectSportsScheduleEvent
});

const mapDispatchToProps = dispatch => ({
  setSportsScheduleEvent: (event) => dispatch(setSportsScheduleEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
