import CashierActionTypes from './types';
import CashierService from 'admin-app/services/cashier-service';

const cashierService = new CashierService();

const settleRequested = () => ({
  type: CashierActionTypes.FETCH_CASHIER_REQUEST
});
const settleLoaded = data => ({
  type: CashierActionTypes.FETCH_CASHIER_SUCCESS,
  payload: data
});
const sellteError = error => ({
  type: CashierActionTypes.FETCH_CASHIER_FAILURE,
  payload: error
});

export const fetchCashierData = () => dispatch => {
  dispatch(settleRequested());
  cashierService.getCashier()
    .then(data => dispatch(settleLoaded(data)))
    .catch(error => dispatch(sellteError(error)))
};
