import ScoresTypes from './types';

export const toggleScores = () => ({
  type: ScoresTypes.TOGGLE_SCORES
});

export const scoresRequested = () => ({
  type: ScoresTypes.FETCH_SCORES_REQUEST
});
export const scoresLoaded = data => ({
  type: ScoresTypes.FETCH_SCORES_SUCCESS,
  payload: data
});
export const scoresError = error => ({
  type: ScoresTypes.FETCH_SCORES_FAILURE,
  payload: error
});
