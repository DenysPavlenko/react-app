import PositionGamesTypes from './types';

export const positionGamesRequested = payload => ({
  type: PositionGamesTypes.FETCH_POSITION_GAMES_REQUEST,
  payload
});
export const positionGamesLoaded = data => ({
  type: PositionGamesTypes.FETCH_POSITION_GAMES_SUCCESS,
  payload: data
});
export const positionGamesError = error => ({
  type: PositionGamesTypes.FETCH_POSITION_GAMES_FAILURE,
  payload: error
});
