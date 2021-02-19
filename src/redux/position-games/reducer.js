import { fetchState } from 'redux/_utils/fetch-state';
import PositionGamesTypes from './types';

const INITIAL_STATE = fetchState('initial');

const positionGamesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PositionGamesTypes.FETCH_POSITION_GAMES_REQUEST:
      return fetchState('request');
    case PositionGamesTypes.FETCH_POSITION_GAMES_SUCCESS:
      return fetchState('success', action.payload);
    case PositionGamesTypes.FETCH_POSITION_GAMES_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default positionGamesReducer;
