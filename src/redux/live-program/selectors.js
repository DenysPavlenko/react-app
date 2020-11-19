import { createSelector } from 'reselect';

const liveProgramSelector = state => state.liveProgram;

export const selectLiveProgram = createSelector(
  [liveProgramSelector],
  liveProgram => liveProgram
);
