import { takeLatest, put } from 'redux-saga/effects';
import { pendingRequested, pendingLoaded, pendingError } from './actions';
import PendingService from 'services/pending-service';
const pendingService = new PendingService();

function* fetchPendingDataWorker({ payload }) {
  try {
    const data = yield pendingService.getPending(payload);
    yield put(pendingLoaded(data));
  } catch ({ message }) {
    yield put(pendingError(message));
  }
}

export function* fetchPendingData() {
  yield takeLatest(pendingRequested().type, fetchPendingDataWorker);
}
