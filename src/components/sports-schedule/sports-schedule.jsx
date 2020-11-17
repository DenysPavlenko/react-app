import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
// Redux
import { fetchSportsScheduleData } from 'redux/sports-schedule/actions';
import { selectSportsSchedule } from 'redux/sports-schedule/selectors';
// Components
import Typography from 'components/typography/typography';
import SportsScheduleTab from 'components/sports-schedule-tab/sports-schedule-tab';
import ErrorIndicator from 'components/error-indicator/error-indicator';
import Spinner from 'components/spinner/spinner';
// Styles
import './sports-schedule.sass';

const SportsSchedule = ({ sportsSchedule: { loading, error, data }, fetchSportsScheduleData }) => {
  const [currentEvent, setCurrentEvent] = useState('upNext');

  useEffect(() => {
    fetchSportsScheduleData();
  }, [fetchSportsScheduleData])

  const handleEvent = (event) => {
    setCurrentEvent(event);
  };

  return (
    <div className="sports-schedule">
      <Typography component="h4" className="sports-schedule__heading mb-0">Sports Schedule</Typography>
      {error && <ErrorIndicator />}
      {(!error && loading) && <div className="sports-schedule__spinner"><Spinner /></div>}
      {(!error && !loading) &&
        <div className="sports-schedule__items">
          {data.map(({ title, icon, content, id }) => (
            <SportsScheduleTab key={id} event={id} title={title} icon={icon} content={content} handleEvent={handleEvent} isActive={currentEvent === id} />
          ))}
        </div>
      }
    </div>
  );
};

SportsSchedule.propTypes = {
  sportsSchedule: PropTypes.object,
  fetchSportsScheduleData: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  sportsSchedule: selectSportsSchedule,
});

const mapDispatchToProps = dispatch => ({
  fetchSportsScheduleData: () => dispatch(fetchSportsScheduleData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SportsSchedule);
