import { takeLatest, put } from 'redux-saga/effects';
import { pendingBetsRequested, pendingBetsLoaded, pendingBetsError } from './actions';
import PendingBetsService from 'services/pending-bets-service';
const pendingBetsService = new PendingBetsService();

function* fetchPendingBetsDataWorker({ payload }) {
  try {
    const data = yield pendingBetsService.getPendingBets(payload);
    yield put(pendingBetsLoaded(data));
  } catch ({ message }) {
    yield put(pendingBetsError(message));
  }
}

export function* fetchPendingBetsData() {
  yield takeLatest(pendingBetsRequested().type, fetchPendingBetsDataWorker);
}
