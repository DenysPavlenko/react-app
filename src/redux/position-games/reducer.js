import { requestData, setData, setError } from 'redux/_utils/fetch-utils';
import PositionGamesTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const positionGamesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PositionGamesTypes.FETCH_POSITION_GAMES_REQUEST:
      return requestData();
    case PositionGamesTypes.FETCH_POSITION_GAMES_SUCCESS:
      return setData(action.payload);
    case PositionGamesTypes.FETCH_POSITION_GAMES_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default positionGamesReducer;
