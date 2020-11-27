import ScoresActionTypes from './types';
// Live program service
import ScoresService from 'services/scores-service';
const scoresService = new ScoresService();

export const toggleScores = () => ({
  type: ScoresActionTypes.TOGGLE_SCORES
});

const scoresRequested = () => ({
  type: ScoresActionTypes.FETCH_SCORES_REQUEST
});
const scoresLoaded = data => ({
  type: ScoresActionTypes.FETCH_SCORES_SUCCESS,
  payload: data
});
const scoresError = error => ({
  type: ScoresActionTypes.FETCH_SCORES_FAILURE,
  payload: error
});

export const fetchLiveProgramData = () => (dispatch) => {
  dispatch(scoresRequested());
  scoresService.getScores()
    .then((data) => dispatch(scoresLoaded(data)))
    .catch((error) => dispatch(scoresError(error)))
};
