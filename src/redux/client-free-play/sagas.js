import { takeLatest, put } from 'redux-saga/effects';
import { clientFreePlayRequested, clientFreePlayLoaded, clientFreePlayError } from './actions';
import ClientFreePlayService from 'services/client-free-play-service';
const clientFreePlayService = new ClientFreePlayService();

function* fetchClientFreePlayDataWorker({ payload }) {
  try {
    const data = yield clientFreePlayService.getClientFreePlay(payload);
    yield put(clientFreePlayLoaded(data));
  } catch (error) {
    yield put(clientFreePlayError(error));
  }
}

export function* fetchClientFreePlayData() {
  yield takeLatest(clientFreePlayRequested().type, fetchClientFreePlayDataWorker);
}
