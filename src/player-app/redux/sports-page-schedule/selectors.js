import { createSelector } from 'reselect';

const sportsPageScheduleSelector = state => state.sportsPageSchedule;

export const selectSportsPageSchedule = createSelector(
  [sportsPageScheduleSelector],
  sportsPageSchedule => sportsPageSchedule.showSportsSchedule
);
