import { takeLatest, put } from 'redux-saga/effects';
import { settleRequested, settleLoaded, settleError } from './actions';
import SettleService from 'services/settle-service';
const settleService = new SettleService();

function* fetchSettleDataWorker({ payload }) {
  try {
    const data = yield settleService.getSettle(payload);
    yield put(settleLoaded(data));
  } catch ({ message }) {
    yield put(settleError(message));
  }
}

export function* fetchSettleData() {
  yield takeLatest(settleRequested().type, fetchSettleDataWorker);
}
