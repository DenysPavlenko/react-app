import SportsScheduleEventsTypes from './types';

export const setSportsScheduleEvents = events => ({
  type: SportsScheduleEventsTypes.SET_SPORTS_SCHEDULE_EVENTS,
  payload: events
});

export const setSportsScheduleEvent = event => ({
  type: SportsScheduleEventsTypes.SET_SPORTS_SCHEDULE_EVENT,
  payload: event
});
