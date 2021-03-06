import { takeLatest, put } from 'redux-saga/effects';
import { clientBalanceRequested, clientBalanceLoaded, clientBalanceError } from './actions';
import ClientBalanceService from 'services/client-balance-service';
const clientBalanceService = new ClientBalanceService();

function* fetchClientBalanceDataWorker() {
  try {
    const data = yield clientBalanceService.getClientBalance();
    yield put(clientBalanceLoaded(data));
  } catch ({ message }) {
    yield put(clientBalanceError(message));
  }
}

export function* fetchClientBalanceData() {
  yield takeLatest(clientBalanceRequested().type, fetchClientBalanceDataWorker);
}
