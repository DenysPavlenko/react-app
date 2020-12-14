import ClientHistoryActionTypes from './types';
// Recent logins service
import ClientHistoryService from 'admin-app/services/client-history-service';
const clientHistoryService = new ClientHistoryService();

const clientHistoryRequested = () => ({
  type: ClientHistoryActionTypes.FETCH_CLIENT_HISTORY_REQUEST
});
const clientHistoryLoaded = data => ({
  type: ClientHistoryActionTypes.FETCH_CLIENT_HISTORY_SUCCESS,
  payload: data
});
const clientHistoryError = error => ({
  type: ClientHistoryActionTypes.FETCH_CLIENT_HISTORY_FAILURE,
  payload: error
});

export const fetchClientHistoryData = (clientId, category) => dispatch => {
  let service;
  if (category === 'football') { service = clientHistoryService.getClientFootballHistory; }
  else if (category === 'monthly') { service = clientHistoryService.getClientMonthlyHistory; }
  else if (category === 'yearly') { service = clientHistoryService.getClientYarlyHistory; }
  else { return; }
  dispatch(clientHistoryRequested());
  service(clientId)
    .then(data => dispatch(clientHistoryLoaded(data)))
    .catch(error => dispatch(clientHistoryError(error)))
};
