import ClientWagersTypes from './types';
import ClientWagersService from 'admin-app/services/client-wagers-service';
const clientWagersService = new ClientWagersService();

const clientWagersRequested = () => ({
  type: ClientWagersTypes.FETCH_CLIENT_WAGERS_REQUEST
});
const clientWagersLoaded = data => ({
  type: ClientWagersTypes.FETCH_CLIENT_WAGERS_SUCCESS,
  payload: data
});
const clientWagersError = error => ({
  type: ClientWagersTypes.FETCH_CLIENT_WAGERS_FAILURE,
  payload: error
});

export const fetchClientWagersData = (clientId, filter) => dispatch => {
  dispatch(clientWagersRequested());
  clientWagersService.getClientWagers(clientId, filter)
    .then(data => dispatch(clientWagersLoaded(data)))
    .catch(error => dispatch(clientWagersError(error)))
};
