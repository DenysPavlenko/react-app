import ClientGeneralActionTypes from './types';
// Recent logins service
import ClientGeneralService from 'admin-app/services/client-general-service';
const clientGeneralService = new ClientGeneralService();

const clientGeneralRequested = () => ({
  type: ClientGeneralActionTypes.FETCH_CLIENT_GENERAL_REQUEST
});
const recentLoginsLoaded = data => ({
  type: ClientGeneralActionTypes.FETCH_CLIENT_GENERAL_SUCCESS,
  payload: data
});
const recentLoginsError = error => ({
  type: ClientGeneralActionTypes.FETCH_CLIENT_GENERAL_FAILURE,
  payload: error
});

export const fetchClientGeneralData = () => dispatch => {
  dispatch(clientGeneralRequested());
  clientGeneralService.getClientGeneral()
    .then(data => dispatch(recentLoginsLoaded(data)))
    .catch(error => dispatch(recentLoginsError(error)))
};
