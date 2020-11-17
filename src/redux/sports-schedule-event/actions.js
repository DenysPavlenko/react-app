import SportsScheduleEventActionTypes from './types';

export const setSportsScheduleEvent = event => ({
  type: SportsScheduleEventActionTypes.SET_SPORTS_SCHEDULE_EVENT,
  payload: event
});
