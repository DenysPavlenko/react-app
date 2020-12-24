import { createSelector } from 'reselect';

const horsesBettingsSelector = state => state.horsesBettings;

export const selectHorsesBettings = createSelector(
  [horsesBettingsSelector],
  horsesBettings => horsesBettings
);
