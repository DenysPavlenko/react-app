import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'redux/color-scheme/selectors';
import { selectSportsScheduleEvents } from 'redux/sports-schedule-events/selectors';
import { setSportsScheduleEvents, setSportsScheduleEvent } from 'redux/sports-schedule-events/actions';
// Components
import Typography from 'components/typography/typography';
import Checkbox from 'components/checkbox/checkbox';

const Item = ({ title, event, defaultColorScheme, sportsScheduleEvents, setSportsScheduleEvents, setSportsScheduleEvent }) => {
  const isActive = sportsScheduleEvents.includes(event);
  const classes = classNames({
    'sports-schedule-item': true,
    [`sports-schedule-item--${defaultColorScheme}`]: defaultColorScheme,
    'is-active': isActive,
  });

  return (
    <div className={classes} onClick={() => setSportsScheduleEvent(event)}>
      <div className="sports-schedule-item__heading">
        <Checkbox checked={isActive} onChange={() => setSportsScheduleEvents(event)} className="sports-schedule-item__checkbox"
        />
        <Typography component="p" className={`mb-0 ${isActive ? 'text-light' : 'text-dark'}`}>{title}</Typography>
      </div>
    </div>
  )
};

Item.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  defaultColorScheme: PropTypes.string,
  sportsScheduleEvents: PropTypes.array,
  setSportsScheduleEvents: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  defaultColorScheme: selectColorScheme,
  sportsScheduleEvents: selectSportsScheduleEvents
});

const mapDispatchToProps = dispatch => ({
  setSportsScheduleEvents: (event) => dispatch(setSportsScheduleEvents(event)),
  setSportsScheduleEvent: (event) => dispatch(setSportsScheduleEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
