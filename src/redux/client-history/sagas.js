import { takeLatest, put } from 'redux-saga/effects';
import { clientHistoryRequested, clientHistoryLoaded, clientHistoryError } from './actions';
import ClientHistoryService from 'services/client-history-service';
const clientHistoryService = new ClientHistoryService();

function* fetchClientHistoryDataWorker({ payload: { clientId, category } }) {
  try {
    const data = yield clientHistoryService.getClientHistory(clientId, category);
    yield put(clientHistoryLoaded(data));
  } catch (error) {
    yield put(clientHistoryError(error));
  }
}

export function* fetchClientHistoryData() {
  yield takeLatest(clientHistoryRequested().type, fetchClientHistoryDataWorker);
}
