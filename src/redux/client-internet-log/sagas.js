import { takeLatest, put } from 'redux-saga/effects';
import { clientInternetLogRequested, clientInternetLogLoaded, clientInternetLogError } from './actions';
import ClientInternetLogService from 'services/client-internet-log-service';
const clientInternetLogService = new ClientInternetLogService();

function* fetchClientInternetLogDataWorker({ payload: { clientId, date } }) {
  try {
    const data = yield clientInternetLogService.getClientInternetLog(clientId, date);
    yield put(clientInternetLogLoaded(data));
  } catch ({ message }) {
    yield put(clientInternetLogError(message));
  }
}

export function* fetchClientInternetLogData() {
  yield takeLatest(clientInternetLogRequested().type, fetchClientInternetLogDataWorker);
}
