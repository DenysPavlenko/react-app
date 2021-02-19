import { takeLatest, put } from 'redux-saga/effects';
import { pendingWagersRequested, pendingWagersLoaded, pendingWagersError } from './actions';
import PendingWagersService from 'services/pending-wagers-service';
const pendingWagersService = new PendingWagersService();

function* fetchPendingWagersDataWorker({ payload }) {
  try {
    const data = yield pendingWagersService.getPendingWagers(payload);
    yield put(pendingWagersLoaded(data));
  } catch ({ message }) {
    yield put(pendingWagersError(message));
  }
}

export function* fetchPendingWagersData() {
  yield takeLatest(pendingWagersRequested().type, fetchPendingWagersDataWorker);
}
