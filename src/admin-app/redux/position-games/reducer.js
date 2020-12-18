import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import PositionGamesActionTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const positionGamesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PositionGamesActionTypes.FETCH_POSITION_GAMES_REQUEST:
      return requestData();
    case PositionGamesActionTypes.FETCH_POSITION_GAMES_SUCCESS:
      return setData(action.payload);
    case PositionGamesActionTypes.FETCH_POSITION_GAMES_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default positionGamesReducer;
