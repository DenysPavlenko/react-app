import SportsScheduleTypes from './types';

export const sportsScheduleRequested = () => ({
  type: SportsScheduleTypes.FETCH_SPORTS_SCHEDULE_REQUEST
});
export const sportsScheduleLoaded = data => ({
  type: SportsScheduleTypes.FETCH_SPORTS_SCHEDULE_SUCCESS,
  payload: data
});
export const sportsScheduleError = error => ({
  type: SportsScheduleTypes.FETCH_SPORTS_SCHEDULE_FAILURE,
  payload: error
});
