import ClientLimitsActionTypes from './types';
// Recent logins service
import ClientLimitsService from 'admin-app/services/client-limits-service';
const clientLimitsService = new ClientLimitsService();

const clientLimitsRequested = () => ({
  type: ClientLimitsActionTypes.FETCH_CLIENT_LIMITS_REQUEST
});
const clientLimitsLoaded = data => ({
  type: ClientLimitsActionTypes.FETCH_CLIENT_LIMITS_SUCCESS,
  payload: data
});
const clientLimitsError = error => ({
  type: ClientLimitsActionTypes.FETCH_CLIENT_LIMITS_FAILURE,
  payload: error
});

export const fetchClientLimitsData = clientId => dispatch => {
  dispatch(clientLimitsRequested());
  clientLimitsService.getClientLimits(clientId)
    .then(data => dispatch(clientLimitsLoaded(data)))
    .catch(error => dispatch(clientLimitsError(error)))
};
