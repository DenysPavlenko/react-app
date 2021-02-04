import SportsScheduleTypes from './types';
// Sports schedule service
import SportsScheduleService from 'services/sports-schedule-service';
const sportsScheduleService = new SportsScheduleService();

const sportsScheduleRequested = () => ({
  type: SportsScheduleTypes.FETCH_SPORTS_SCHEDULE_REQUEST
});
const sportsScheduleLoaded = data => ({
  type: SportsScheduleTypes.FETCH_SPORTS_SCHEDULE_SUCCESS,
  payload: data
});
const sportsScheduleError = error => ({
  type: SportsScheduleTypes.FETCH_SPORTS_SCHEDULE_FAILURE,
  payload: error
});

export const fetchSportsScheduleData = () => dispatch => {
  dispatch(sportsScheduleRequested());
  sportsScheduleService.getSportsSchedule()
    .then(data => dispatch(sportsScheduleLoaded(data)))
    .catch(error => dispatch(sportsScheduleError(error)))
};
