import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import ScoresTypes from './types';

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
    case ScoresTypes.TOGGLE_SCORES:
      const { isActive } = state;
      return {
        ...state,
        isActive: !isActive
      }
    case ScoresTypes.FETCH_SCORES_REQUEST:
      return {
        ...state,
        scores: requestData()
      }
    case ScoresTypes.FETCH_SCORES_SUCCESS:
      return {
        ...state,
        scores: setData(action.payload)
      }
    case ScoresTypes.FETCH_SCORES_FAILURE:
      return {
        ...state,
        scores: setError(action.payload)
      }
    default:
      return state;
  }
};

export default scoresReducer;
