import HorsesBettingsTypes from './types';
import HorsesBettibgsService from 'player-app/services/horses-betings-service';

const horsesBettibgsService = new HorsesBettibgsService();

const horsesBettingsRequested = () => ({
  type: HorsesBettingsTypes.FETCH_HORSES_BETTINGS_REQUEST
});
const horsesBettingsLoaded = data => ({
  type: HorsesBettingsTypes.FETCH_HORSES_BETTINGS_SUCCESS,
  payload: data
});
const horsesBettingsError = error => ({
  type: HorsesBettingsTypes.FETCH_HORSES_BETTINGS_FAILURE,
  payload: error
});

export const fetchHorsesBettingsData = () => dispatch => {
  dispatch(horsesBettingsRequested());
  horsesBettibgsService.getHorsesBettings()
    .then(data => dispatch(horsesBettingsLoaded(data)))
    .catch(error => dispatch(horsesBettingsError(error)))
};
