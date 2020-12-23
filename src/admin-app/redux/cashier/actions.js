import CashierActionTypes from './types';
import CashierService from 'admin-app/services/cashier-service';

const cashierService = new CashierService();

const cashierRequested = () => ({
  type: CashierActionTypes.FETCH_CASHIER_REQUEST
});
const cashierLoaded = data => ({
  type: CashierActionTypes.FETCH_CASHIER_SUCCESS,
  payload: data
});
const cashierError = error => ({
  type: CashierActionTypes.FETCH_CASHIER_FAILURE,
  payload: error
});

export const fetchCashierData = () => dispatch => {
  dispatch(cashierRequested());
  cashierService.getCashier()
    .then(data => dispatch(cashierLoaded(data)))
    .catch(error => dispatch(cashierError(error)))
};
