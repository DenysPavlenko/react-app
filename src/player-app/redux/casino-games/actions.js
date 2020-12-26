import CasinoGamesTypes from './types';
// Casino games service
import CasinoGamesService from 'player-app/services/casino-games-service';
const casinoGamesService = new CasinoGamesService();

const casinoGamesRequested = () => ({
  type: CasinoGamesTypes.FETCH_CASINO_GAMES_REQUEST
});
const casinoGamesLoaded = data => ({
  type: CasinoGamesTypes.FETCH_CASINO_GAMES_SUCCESS,
  payload: data
});
const casinoGamesError = error => ({
  type: CasinoGamesTypes.FETCH_CASINO_GAMES_FAILURE,
  payload: error
});

export const fetchCasinoGamesData = () => dispatch => {
  dispatch(casinoGamesRequested());
  casinoGamesService.getCasinoGames()
    .then(data => dispatch(casinoGamesLoaded(data)))
    .catch(error => dispatch(casinoGamesError(error)))
};
