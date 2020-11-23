import CasinoGamesActionTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const casinoGamesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CasinoGamesActionTypes.FETCH_CASINO_GAMES_REQUEST:
      return {
        loading: true,
        data: null,
        error: false,
        errorDetails: null,
      }
    case CasinoGamesActionTypes.FETCH_CASINO_GAMES_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: false,
        errorDetails: null,
      }
    case CasinoGamesActionTypes.FETCH_CASINO_GAMES_FAILURE:
      return {
        loading: false,
        data: null,
        error: true,
        errorDetails: action.payload,
      }
    default:
      return state;
  }
};

export default casinoGamesReducer;
