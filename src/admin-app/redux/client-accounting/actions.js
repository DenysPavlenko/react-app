import ClientAccountingActionTypes from './types';
// Recent logins service
import ClientAccountingService from 'admin-app/services/client-accounting-service';
const clientAccountingService = new ClientAccountingService();

const clientAccountingRequested = () => ({
  type: ClientAccountingActionTypes.FETCH_CLIENT_ACCOUNTING_REQUEST
});
const clientAccountingLoaded = data => ({
  type: ClientAccountingActionTypes.FETCH_CLIENT_ACCOUNTING_SUCCESS,
  payload: data
});
const clientAccountingError = error => ({
  type: ClientAccountingActionTypes.FETCH_CLIENT_ACCOUNTING_FAILURE,
  payload: error
});

export const fetchClientAccountingData = () => dispatch => {
  dispatch(clientAccountingRequested());
  clientAccountingService.getClientAccounting()
    .then(data => dispatch(clientAccountingLoaded(data)))
    .catch(error => dispatch(clientAccountingError(error)))
};