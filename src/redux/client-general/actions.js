import ClientGeneralTypes from './types';
import ClientGeneralService from 'services/client-general-service';
const clientGeneralService = new ClientGeneralService();

const clientGeneralRequested = () => ({
  type: ClientGeneralTypes.FETCH_CLIENT_GENERAL_REQUEST
});
const clientGeneralLoaded = data => ({
  type: ClientGeneralTypes.FETCH_CLIENT_GENERAL_SUCCESS,
  payload: data
});
const clientGeneralError = error => ({
  type: ClientGeneralTypes.FETCH_CLIENT_GENERAL_FAILURE,
  payload: error
});

export const fetchClientGeneralData = clientId => dispatch => {
  dispatch(clientGeneralRequested());
  clientGeneralService.getClientGeneral(clientId)
    .then(data => dispatch(clientGeneralLoaded(data)))
    .catch(error => dispatch(clientGeneralError(error)))
};
