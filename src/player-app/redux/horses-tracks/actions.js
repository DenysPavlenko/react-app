
import HorsesTracksActionTypes from './types';
// Horses tracks service
import HorsesTracksService from 'player-app/services/horses-tracks-service';
const horsesTracksService = new HorsesTracksService();

const horsesTracksRequested = () => ({
  type: HorsesTracksActionTypes.FETCH_HORSES_TRACKS_REQUEST
});
const horsesTracksLoaded = data => ({
  type: HorsesTracksActionTypes.FETCH_HORSES_TRACKS_SUCCESS,
  payload: data
});
const horsesTracksError = error => ({
  type: HorsesTracksActionTypes.FETCH_HORSES_TRACKS_FAILURE,
  payload: error
});

export const fetchHorsesTracksData = () => dispatch => {
  dispatch(horsesTracksRequested());
  horsesTracksService.getHorsesTracks()
    .then(data => dispatch(horsesTracksLoaded(data)))
    .catch(error => dispatch(horsesTracksError(error)))
};
