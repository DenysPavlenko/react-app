import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
// Redux
import { fetchSportsScheduleData } from 'player-app/redux/sports-schedule/actions';
import { selectSportsSchedule } from 'player-app/redux/sports-schedule/selectors';
import { toggleSportsPageSchedule } from 'player-app/redux/sports-page-schedule/actions';
// Components
import Typography from 'shared/components/typography/typography';
import Button from 'shared/components/button/button';
import SportsScheduleItem from 'player-app/components/sports-schedule-item/sports-schedule-item';
import ErrorIndicator from 'shared/components/error-indicator/error-indicator';
import Spinner from 'shared/components/spinner/spinner';
// Styles
import './sports-schedule.sass';

const SportsSchedule = ({ sportsSchedule: { loading, error, data }, fetchSportsScheduleData, toggleSportsPageSchedule }) => {

  useLayoutEffect(() => {
    fetchSportsScheduleData();
  }, [fetchSportsScheduleData]);

  return (
    <div className="sports-schedule">
      <div className="sports-schedule__header">
        <Typography component="h4" className="sports-schedule__heading">Sports Schedule</Typography>
        <Button type="button" variant="accent" className="sports-schedule__header-button" size="sm" onClick={toggleSportsPageSchedule}>Show</Button>
      </div>
      {error && <ErrorIndicator retry={fetchSportsScheduleData} />}
      {(!error && loading) && <Spinner boxed />}
      {(!error && !loading) &&
        <div className="sports-schedule__items">
          {data.map(({ title, icon, content, id }) => (
            <SportsScheduleItem key={id} event={id} title={title} icon={icon} content={content} />
          ))}
        </div>
      }
    </div>
  );
};

SportsSchedule.propTypes = {
  sportsSchedule: PropTypes.object,
  fetchSportsScheduleData: PropTypes.func,
  toggleSportsPageSchedule: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  sportsSchedule: selectSportsSchedule,
});

const mapDispatchToProps = dispatch => ({
  fetchSportsScheduleData: () => dispatch(fetchSportsScheduleData()),
  toggleSportsPageSchedule: () => dispatch(toggleSportsPageSchedule())
});

export default connect(mapStateToProps, mapDispatchToProps)(SportsSchedule);
