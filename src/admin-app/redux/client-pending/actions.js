import ClientPendingActionTypes from './types';
// Recent logins service
import ClientPendingService from 'admin-app/services/client-pending-service';
const clientPendingService = new ClientPendingService();

const clientPendingRequested = () => ({
  type: ClientPendingActionTypes.FETCH_CLIENT_PENDING_REQUEST
});
const clientPendingLoaded = data => ({
  type: ClientPendingActionTypes.FETCH_CLIENT_PENDING_SUCCESS,
  payload: data
});
const clientPendingError = error => ({
  type: ClientPendingActionTypes.FETCH_CLIENT_PENDING_FAILURE,
  payload: error
});

export const fetchClientPendingData = clientId => dispatch => {
  dispatch(clientPendingRequested());
  clientPendingService.getClientPending(clientId)
    .then(data => dispatch(clientPendingLoaded(data)))
    .catch(error => dispatch(clientPendingError(error)))
};
