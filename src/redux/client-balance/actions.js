import ClientBalanceTypes from './types';
import ClientBalanceService from 'services/client-balance-service';
const clientBalanceService = new ClientBalanceService();

const clientBalanceRequested = () => ({
  type: ClientBalanceTypes.FETCH_CLIENT_BALANCE_REQUEST
});
const clientBalanceLoaded = data => ({
  type: ClientBalanceTypes.FETCH_CLIENT_BALANCE_SUCCESS,
  payload: data
});
const clientBalanceError = error => ({
  type: ClientBalanceTypes.FETCH_CLIENT_BALANCE_FAILURE,
  payload: error
});

export const fetchClientBalanceData = clientId => dispatch => {
  dispatch(clientBalanceRequested());
  clientBalanceService.getClientBalance(clientId)
    .then(data => dispatch(clientBalanceLoaded(data)))
    .catch(error => dispatch(clientBalanceError(error)))
};
