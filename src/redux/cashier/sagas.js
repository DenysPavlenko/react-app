import { takeLatest, put } from 'redux-saga/effects';
import { cashierRequested, cashierLoaded, cashierError } from './actions';
import CashierService from 'services/cashier-service';
const cashierService = new CashierService();

function* fetchCashierDataWorker() {
  try {
    const data = yield cashierService.getCashier();
    yield put(cashierLoaded(data));
  } catch (error) {
    yield put(cashierError(error));
  }
}

export function* fetchCashierData() {
  yield takeLatest(cashierRequested().type, fetchCashierDataWorker);
}
