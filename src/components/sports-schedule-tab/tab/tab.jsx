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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from 'components/typography/typography';

const Tab = ({ title, icon, event, defaultColorScheme, sportsScheduleEvent, setSportsScheduleEvent }) => {
  const isActive = sportsScheduleEvent === event;
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
  event: PropTypes.string,
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

export default connect(mapStateToProps, mapDispatchToProps)(Tab);
