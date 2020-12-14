import ClientGeneralActionTypes from './types';
// Recent logins service
import ClientGeneralService from 'admin-app/services/client-general-service';
const clientGeneralService = new ClientGeneralService();

const clientGeneralRequested = () => ({
  type: ClientGeneralActionTypes.FETCH_CLIENT_GENERAL_REQUEST
});
const clientGeneralLoaded = data => ({
  type: ClientGeneralActionTypes.FETCH_CLIENT_GENERAL_SUCCESS,
  payload: data
});
const clientGeneralError = error => ({
  type: ClientGeneralActionTypes.FETCH_CLIENT_GENERAL_FAILURE,
  payload: error
});

export const fetchClientGeneralData = clientId => dispatch => {
  dispatch(clientGeneralRequested());
  clientGeneralService.getClientGeneral(clientId)
    .then(data => dispatch(clientGeneralLoaded(data)))
    .catch(error => dispatch(clientGeneralError(error)))
};
