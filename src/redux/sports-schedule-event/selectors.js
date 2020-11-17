import { createSelector } from 'reselect';

const sportsScheduleEventSelector = state => state.sportsScheduleEvent;

export const selectSportsScheduleEvent = createSelector(
  [sportsScheduleEventSelector],
  sportsScheduleEvent => sportsScheduleEvent.event
);
