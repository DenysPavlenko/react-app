import CashierTypes from './types';
import CashierService from 'services/cashier-service';

const cashierService = new CashierService();

const cashierRequested = () => ({
  type: CashierTypes.FETCH_CASHIER_REQUEST
});
const cashierLoaded = data => ({
  type: CashierTypes.FETCH_CASHIER_SUCCESS,
  payload: data
});
const cashierError = error => ({
  type: CashierTypes.FETCH_CASHIER_FAILURE,
  payload: error
});

export const fetchCashierData = () => dispatch => {
  dispatch(cashierRequested());
  cashierService.getCashier()
    .then(data => dispatch(cashierLoaded(data)))
    .catch(error => dispatch(cashierError(error)))
};
