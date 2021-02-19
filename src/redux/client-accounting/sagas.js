import { takeLatest, put } from 'redux-saga/effects';
import { clientAccountingRequested, clientAccountingLoaded, clientAccountingError } from './actions';
import ClientAccountingService from 'services/client-accounting-service';
const clientAccountingService = new ClientAccountingService();

function* fetchClientAccountingDataWorker({ payload: { clientId } }) {
  try {
    const data = yield clientAccountingService.getClientAccounting(clientId);
    yield put(clientAccountingLoaded(data));
  } catch (error) {
    yield put(clientAccountingError(error));
  }
}

export function* fetchClientAccountingData() {
  yield takeLatest(clientAccountingRequested().type, fetchClientAccountingDataWorker);
}
