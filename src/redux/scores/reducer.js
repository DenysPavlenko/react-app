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
        scores: {
          loading: true,
          data: null,
          error: false,
          errorDetails: null,
        }
      }
    case ScoresActionTypes.FETCH_SCORES_SUCCESS:
      return {
        ...state,
        scores: {
          loading: false,
          data: action.payload,
          error: false,
          errorDetails: null,
        }
      }
    case ScoresActionTypes.FETCH_SCORES_FAILURE:
      return {
        ...state,
        scores: {
          loading: false,
          data: null,
          error: true,
          errorDetails: action.payload,
        }
      }
    default:
      return state;
  }
};

export default scoresReducer;
