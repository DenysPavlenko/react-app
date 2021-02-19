import { takeLatest, put } from 'redux-saga/effects';
import { cashierRequested, cashierLoaded, cashierError } from './actions';
import CashierService from 'services/cashier-service';
const cashierService = new CashierService();

function* fetchCashierDataWorker() {
  try {
    const data = yield cashierService.getCashier();
    yield put(cashierLoaded(data));
  } catch ({ message }) {
    yield put(cashierError(message));
  }
}

export function* fetchCashierData() {
  yield takeLatest(cashierRequested().type, fetchCashierDataWorker);
}
