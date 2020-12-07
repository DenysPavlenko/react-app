import BalanceActionTypes from './types';
// Balance service
import BalanceService from 'admin-app/services/balance-service';
const balanceService = new BalanceService();

const balanceRequested = () => ({
  type: BalanceActionTypes.FETCH_BALANCE_REQUEST
});
const balanceLoaded = data => ({
  type: BalanceActionTypes.FETCH_BALANCE_SUCCESS,
  payload: data
});
const balanceError = error => ({
  type: BalanceActionTypes.FETCH_BALANCE_FAILURE,
  payload: error
});

export const fetchBalanceData = () => (dispatch) => {
  dispatch(balanceRequested());
  balanceService.getBalance()
    .then(data => dispatch(balanceLoaded(data)))
    .catch(error => dispatch(balanceError(error)))
};
