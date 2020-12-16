import ClientInternetLogActionTypes from './types';
import ClientInternetLogService from 'admin-app/services/client-internet-log-service';
const clientInternetLogService = new ClientInternetLogService();

const clientInternetLogRequested = () => ({
  type: ClientInternetLogActionTypes.FETCH_CLIENT_INTERNET_LOG_REQUEST
});
const clientInternetLogLoaded = data => ({
  type: ClientInternetLogActionTypes.FETCH_CLIENT_INTERNET_LOG_SUCCESS,
  payload: data
});
const clientInternetLogError = error => ({
  type: ClientInternetLogActionTypes.FETCH_CLIENT_INTERNET_LOG_FAILURE,
  payload: error
});

export const fetchClientInternetLogData = clientId => dispatch => {
  dispatch(clientInternetLogRequested());
  clientInternetLogService.getClientInternetLog(clientId)
    .then(data => dispatch(clientInternetLogLoaded(data)))
    .catch(error => dispatch(clientInternetLogError(error)))
};
