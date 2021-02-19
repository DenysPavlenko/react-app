import ClientAccountingTypes from './types';
import ClientAccountingService from 'services/client-accounting-service';
const clientAccountingService = new ClientAccountingService();

const clientAccountingRequested = () => ({
  type: ClientAccountingTypes.FETCH_CLIENT_ACCOUNTING_REQUEST
});
const clientAccountingLoaded = data => ({
  type: ClientAccountingTypes.FETCH_CLIENT_ACCOUNTING_SUCCESS,
  payload: data
});
const clientAccountingError = error => ({
  type: ClientAccountingTypes.FETCH_CLIENT_ACCOUNTING_FAILURE,
  payload: error
});

export const fetchClientAccountingData = clientId => dispatch => {
  dispatch(clientAccountingRequested());
  clientAccountingService.getClientAccounting(clientId)
    .then(data => dispatch(clientAccountingLoaded(data)))
    .catch(error => dispatch(clientAccountingError(error)))
};