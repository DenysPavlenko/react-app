import HorsesTracksActionTypes from './types';
// Services
import HorsesTracksService from 'services/horses-tracks';
// Games service
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

export const fetchHorsesTracksData = () => (dispatch) => {
  dispatch(horsesTracksRequested());
  horsesTracksService.getHorsesTracks()
    .then((data) => dispatch(horsesTracksLoaded(data)))
    .catch((error) => dispatch(horsesTracksError(error)))
};
