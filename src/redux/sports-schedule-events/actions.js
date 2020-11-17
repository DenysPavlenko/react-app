import SportsScheduleEventsActionTypes from './types';

export const setSportsScheduleEvents = events => ({
  type: SportsScheduleEventsActionTypes.SET_SPORTS_SCHEDULE_EVENTS,
  payload: events
});

export const setSportsScheduleEvent = event => ({
  type: SportsScheduleEventsActionTypes.SET_SPORTS_SCHEDULE_EVENT,
  payload: event
});
