import ClientFreePlayActionTypes from './types';
// Recent logins service
import ClientFreePlayService from 'admin-app/services/client-free-play-service';
const clientFreePlayService = new ClientFreePlayService();

const clientFreePlayRequested = () => ({
  type: ClientFreePlayActionTypes.FETCH_CLIENT_FREE_PLAY_REQUEST
});
const clientFreePlayLoaded = data => ({
  type: ClientFreePlayActionTypes.FETCH_CLIENT_FREE_PLAY_SUCCESS,
  payload: data
});
const clientFreePlayError = error => ({
  type: ClientFreePlayActionTypes.FETCH_CLIENT_FREE_PLAY_FAILURE,
  payload: error
});

export const fetchClientFreePlayData = clientId => dispatch => {
  dispatch(clientFreePlayRequested());
  clientFreePlayService.getClientFreePlay(clientId)
    .then(data => dispatch(clientFreePlayLoaded(data)))
    .catch(error => dispatch(clientFreePlayError(error)))
};
