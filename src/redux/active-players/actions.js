import ActivePlayersTypes from './types';

export const toggleActivePlayers = () => ({
  type: ActivePlayersTypes.TOGGLE_ACTIVE_PLAYERS
});
export const activePlayersRequested = () => ({
  type: ActivePlayersTypes.FETCH_ACTIVE_PLAYERS_REQUEST
});
export const activePlayersLoaded = data => ({
  type: ActivePlayersTypes.FETCH_ACTIVE_PLAYERS_SUCCESS,
  payload: data
});
export const activePlayersError = error => ({
  type: ActivePlayersTypes.FETCH_ACTIVE_PLAYERS_FAILURE,
  payload: error
});
