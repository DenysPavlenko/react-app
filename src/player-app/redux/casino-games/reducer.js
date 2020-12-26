import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import CasinoGamesTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const casinoGamesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CasinoGamesTypes.FETCH_CASINO_GAMES_REQUEST:
      return requestData();
    case CasinoGamesTypes.FETCH_CASINO_GAMES_SUCCESS:
      return setData(action.payload);
    case CasinoGamesTypes.FETCH_CASINO_GAMES_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default casinoGamesReducer;
