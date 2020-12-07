import { createSelector } from 'reselect';

const livePlayProgramSelector = state => state.livePlayProgram;

export const selectLivePlayProgram = createSelector(
  [livePlayProgramSelector],
  livePlayProgram => livePlayProgram.isProgramShown
);
