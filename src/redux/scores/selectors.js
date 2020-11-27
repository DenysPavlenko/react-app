import { createSelector } from 'reselect';

const scoresSelector = state => state.scores;

export const selectScoresActive = createSelector(
  [scoresSelector],
  scores => scores.isActive
);

export const selectScores = createSelector(
  [scoresSelector],
  scores => scores.scores
);
