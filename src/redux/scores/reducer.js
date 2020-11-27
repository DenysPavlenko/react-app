import { requestData, setData, setError } from '../_utils/fetch-utils';
import ScoresActionTypes from './types';

const INITIAL_STATE = {
  isActive: false,
  scores: {
    loading: true,
    data: null,
    error: false,
    errorDetails: null,
  }
};

const scoresReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ScoresActionTypes.TOGGLE_SCORES:
      const { isActive } = state;
      return {
        ...state,
        isActive: !isActive
      }
    case ScoresActionTypes.FETCH_SCORES_REQUEST:
      return {
        ...state,
        scores: requestData()
      }
    case ScoresActionTypes.FETCH_SCORES_SUCCESS:
      return {
        ...state,
        scores: setData(action.payload)
      }
    case ScoresActionTypes.FETCH_SCORES_FAILURE:
      return {
        ...state,
        scores: setError(action.payload)
      }
    default:
      return state;
  }
};

export default scoresReducer;
