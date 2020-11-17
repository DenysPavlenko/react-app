import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'redux/color-scheme/selectors';
import { selectSportsScheduleEvents } from 'redux/sports-schedule-events/selectors';
import { setSportsScheduleEvent } from 'redux/sports-schedule-events/actions';
// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from 'components/typography/typography';

const Tab = ({ title, icon, event, defaultColorScheme, sportsScheduleEvents, setSportsScheduleEvent }) => {
  const isActive = sportsScheduleEvents.includes(event);
  const classes = classNames({
    'sports-schedule-tab': true,
    [`sports-schedule-tab--${defaultColorScheme}`]: defaultColorScheme,
    'is-active': isActive,
  });

  return (
    <div className={classes} onClick={() => setSportsScheduleEvent(event)} >
      <div className="sports-schedule-tab__heading">
        <FontAwesomeIcon icon={icon} className={`sports-schedule-tab__icon ${isActive ? 'text-light' : 'text-dark'}`} />
        <Typography component="h3" className={`mb-0 text-uppercase ${isActive ? 'text-light' : 'text-dark'}`}>{title}</Typography>
      </div>
    </div>
  )
};

Tab.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  events: PropTypes.array,
  defaultColorScheme: PropTypes.string,
  sportsScheduleEvents: PropTypes.array,
  setSportsScheduleEvent: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  defaultColorScheme: selectColorScheme,
  sportsScheduleEvents: selectSportsScheduleEvents
});

const mapDispatchToProps = dispatch => ({
  setSportsScheduleEvent: (event) => dispatch(setSportsScheduleEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tab);
