import { createSelector } from 'reselect';

const weeklyFiguresSelector = state => state.weeklyFigures;

export const selectWeeklyFigures = createSelector(
  [weeklyFiguresSelector],
  weeklyFigures => weeklyFigures
);
