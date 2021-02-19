import { fetchState } from 'redux/_utils/fetch-state';
import ScoresTypes from './types';

const INITIAL_STATE = {
  isActive: false,
  scores: fetchState('initial')
};

const scoresReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ScoresTypes.TOGGLE_SCORES:
      const { isActive } = state;
      return {
        ...state,
        isActive: !isActive
      }
    case ScoresTypes.FETCH_SCORES_REQUEST:
      return {
        ...state,
        scores: fetchState('request')
      }
    case ScoresTypes.FETCH_SCORES_SUCCESS:
      return {
        ...state,
        scores: fetchState('success', action.payload)
      }
    case ScoresTypes.FETCH_SCORES_FAILURE:
      return {
        ...state,
        scores: fetchState('failure', action.payload)
      }
    default:
      return state;
  }
};

export default scoresReducer;
