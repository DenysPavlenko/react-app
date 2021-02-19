import ClientDetailLimitsTypes from './types';
import ClientDetailLimitsService from 'services/client-detail-limits-service';
const clientDetailLimitsService = new ClientDetailLimitsService();

const clientDetailLimitsRequested = () => ({
  type: ClientDetailLimitsTypes.FETCH_CLIENT_DETAIL_LIMITS_REQUEST
});
const clientDetailLimitsLoaded = data => ({
  type: ClientDetailLimitsTypes.FETCH_CLIENT_DETAIL_LIMITS_SUCCESS,
  payload: data
});
const clientDetailLimitsError = error => ({
  type: ClientDetailLimitsTypes.FETCH_CLIENT_DETAIL_LIMITS_FAILURE,
  payload: error
});

export const fetchClientDetailLimitsData = (clientId, category) => dispatch => {
  dispatch(clientDetailLimitsRequested());
  clientDetailLimitsService.getClientDetailLimits(clientId, category)
    .then(data => dispatch(clientDetailLimitsLoaded(data)))
    .catch(error => dispatch(clientDetailLimitsError(error)))
};