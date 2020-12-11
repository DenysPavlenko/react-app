import ClientBalanceActionTypes from './types';
// Balance service
import ClientBalanceService from 'admin-app/services/client-balance-service';
const clientBalanceService = new ClientBalanceService();

const clientBalanceRequested = () => ({
  type: ClientBalanceActionTypes.FETCH_CLIENT_BALANCE_REQUEST
});
const clientBalanceLoaded = data => ({
  type: ClientBalanceActionTypes.FETCH_CLIENT_BALANCE_SUCCESS,
  payload: data
});
const clientBalanceError = error => ({
  type: ClientBalanceActionTypes.FETCH_CLIENT_BALANCE_FAILURE,
  payload: error
});

export const fetchClientBalanceData = () => (dispatch) => {
  dispatch(clientBalanceRequested());
  clientBalanceService.getClientBalance()
    .then(data => dispatch(clientBalanceLoaded(data)))
    .catch(error => dispatch(clientBalanceError(error)))
};
