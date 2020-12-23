import ActivePlayersTypes from './types';
import ActivePlayersService from 'admin-app/services/active-players-service';

const activePlayersService = new ActivePlayersService();

export const toggleActivePlayers = () => ({
  type: ActivePlayersTypes.TOGGLE_ACTIVE_PLAYERS
});
const activePlayersRequested = () => ({
  type: ActivePlayersTypes.FETCH_ACTIVE_PLAYERS_REQUEST
});
const activePlayersLoaded = data => ({
  type: ActivePlayersTypes.FETCH_ACTIVE_PLAYERS_SUCCESS,
  payload: data
});
const activePlayersError = error => ({
  type: ActivePlayersTypes.FETCH_ACTIVE_PLAYERS_FAILURE,
  payload: error
});

export const fetchActivePlayersData = () => dispatch => {
  dispatch(activePlayersRequested());
  activePlayersService.getActivePlayers()
    .then(data => dispatch(activePlayersLoaded(data)))
    .catch(error => dispatch(activePlayersError(error)))
};
