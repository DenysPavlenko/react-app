import { takeLatest, put } from 'redux-saga/effects';
import { clientPendingRequested, clientPendingLoaded, clientPendingError } from './actions';
import ClientPendingService from 'services/client-pending-service';
const clientPendingService = new ClientPendingService();

function* fetchClientPendingDataWorker({ payload }) {
  try {
    const data = yield clientPendingService.getClientPending(payload);
    yield put(clientPendingLoaded(data));
  } catch ({ message }) {
    yield put(clientPendingError(message));
  }
}

export function* fetchClientPendingData() {
  yield takeLatest(clientPendingRequested().type, fetchClientPendingDataWorker);
}
