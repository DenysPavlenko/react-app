import PositionGamesTypes from './types';
import PositionGamesService from 'admin-app/services/position-games-service';

const positionGamesService = new PositionGamesService();

const positionGamesRequested = () => ({
  type: PositionGamesTypes.FETCH_POSITION_GAMES_REQUEST
});
const positionGamesLoaded = data => ({
  type: PositionGamesTypes.FETCH_POSITION_GAMES_SUCCESS,
  payload: data
});
const positionGamesError = error => ({
  type: PositionGamesTypes.FETCH_POSITION_GAMES_FAILURE,
  payload: error
});

export const fetchPositionGamesData = (game, filter) => dispatch => {
  dispatch(positionGamesRequested());
  positionGamesService.getPositionGames(game, filter)
    .then(data => dispatch(positionGamesLoaded(data)))
    .catch(error => dispatch(positionGamesError(error)))
};
