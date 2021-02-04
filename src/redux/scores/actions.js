import ScoresTypes from './types';
// Scores service
import ScoresService from 'services/scores-service';
const scoresService = new ScoresService();

export const toggleScores = () => ({
  type: ScoresTypes.TOGGLE_SCORES
});

const scoresRequested = () => ({
  type: ScoresTypes.FETCH_SCORES_REQUEST
});
const scoresLoaded = data => ({
  type: ScoresTypes.FETCH_SCORES_SUCCESS,
  payload: data
});
const scoresError = error => ({
  type: ScoresTypes.FETCH_SCORES_FAILURE,
  payload: error
});

export const fetchScoresData = () => dispatch => {
  dispatch(scoresRequested());
  scoresService.getScores()
    .then(data => dispatch(scoresLoaded(data)))
    .catch(error => dispatch(scoresError(error)))
};
