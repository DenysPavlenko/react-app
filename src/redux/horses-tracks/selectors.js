import { createSelector } from 'reselect';

const horsesTracksSelector = state => state.horsesTracks;

export const selectHorsesTracks = createSelector(
  [horsesTracksSelector],
  horsesTracks => horsesTracks
);
