import { createSelector } from 'reselect';

const horsesBetsSelector = state => state.horsesBets;

export const selectHorsesBets = createSelector(
  [horsesBetsSelector],
  horsesBets => horsesBets.bets
);

export const selectTotalHorsesBets = createSelector(
  [horsesBetsSelector],
  horsesBets => horsesBets.bets.reduce((acc, item) => acc + parseInt(item.bets), 0)
);

export const selectTotalHorsesSlips = createSelector(
  [horsesBetsSelector],
  horsesBets => horsesBets.bets.reduce((acc, item) => acc + parseInt(item.bets) * parseInt(item.amount), 0)
);
