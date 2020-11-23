import CasinoGamesActionTypes from './types';
// Services
import CasinoGamesService from 'services/casino-games-service';
// Games service
const casinoGamesService = new CasinoGamesService();

const casinoGamesRequested = () => ({
  type: CasinoGamesActionTypes.FETCH_CASINO_GAMES_REQUEST
});
const casinoGamesLoaded = data => ({
  type: CasinoGamesActionTypes.FETCH_CASINO_GAMES_SUCCESS,
  payload: data
});
const casinoGamesError = error => ({
  type: CasinoGamesActionTypes.FETCH_CASINO_GAMES_FAILURE,
  payload: error
});

export const fetchCasinoGamesData = () => (dispatch) => {
  dispatch(casinoGamesRequested());
  casinoGamesService.getCasinoGames()
    .then((data) => dispatch(casinoGamesLoaded(data)))
    .catch((error) => dispatch(casinoGamesError(error)))
};
