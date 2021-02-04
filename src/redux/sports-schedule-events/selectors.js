import { createSelector } from 'reselect';

const sportsScheduleEventsSelector = state => state.sportsScheduleEvents;

export const selectSportsScheduleEvents = createSelector(
  [sportsScheduleEventsSelector],
  sportsScheduleEvents => sportsScheduleEvents.events
);
