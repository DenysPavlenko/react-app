import { createSelector } from 'reselect';

const sportsScheduleSelector = state => state.sportsSchedule;

export const selectSportsSchedule = createSelector(
  [sportsScheduleSelector],
  sportsSchedule => sportsSchedule
);
