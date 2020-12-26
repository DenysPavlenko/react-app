import ClientHistoryTypes from './types';
import ClientHistoryService from 'admin-app/services/client-history-service';

const clientHistoryService = new ClientHistoryService();

const clientHistoryRequested = () => ({
  type: ClientHistoryTypes.FETCH_CLIENT_HISTORY_REQUEST
});
const clientHistoryLoaded = data => ({
  type: ClientHistoryTypes.FETCH_CLIENT_HISTORY_SUCCESS,
  payload: data
});
const clientHistoryError = error => ({
  type: ClientHistoryTypes.FETCH_CLIENT_HISTORY_FAILURE,
  payload: error
});

export const fetchClientHistoryData = (clientId, category) => dispatch => {
  dispatch(clientHistoryRequested());
  clientHistoryService.getClientHistory(clientId, category)
    .then(data => dispatch(clientHistoryLoaded(data)))
    .catch(error => dispatch(clientHistoryError(error)))
};
