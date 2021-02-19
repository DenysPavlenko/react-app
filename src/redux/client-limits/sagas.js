import { takeLatest, put } from 'redux-saga/effects';
import { clientLimitsRequested, clientLimitsLoaded, clientLimitsError } from './actions';
import ClientLimitsService from 'services/client-limits-service';
const clientLimitsService = new ClientLimitsService();

function* fetchClientLimitsDataWorker({ payload }) {
  try {
    const data = yield clientLimitsService.getClientLimits(payload);
    yield put(clientLimitsLoaded(data));
  } catch ({ message }) {
    yield put(clientLimitsError(message));
  }
}

export function* fetchClientLimitsData() {
  yield takeLatest(clientLimitsRequested().type, fetchClientLimitsDataWorker);
}
