import ClientLimitsTypes from './types';
import ClientLimitsService from 'services/client-limits-service';
const clientLimitsService = new ClientLimitsService();

const clientLimitsRequested = () => ({
  type: ClientLimitsTypes.FETCH_CLIENT_LIMITS_REQUEST
});
const clientLimitsLoaded = data => ({
  type: ClientLimitsTypes.FETCH_CLIENT_LIMITS_SUCCESS,
  payload: data
});
const clientLimitsError = error => ({
  type: ClientLimitsTypes.FETCH_CLIENT_LIMITS_FAILURE,
  payload: error
});

export const fetchClientLimitsData = clientId => dispatch => {
  dispatch(clientLimitsRequested());
  clientLimitsService.getClientLimits(clientId)
    .then(data => dispatch(clientLimitsLoaded(data)))
    .catch(error => dispatch(clientLimitsError(error)))
};
