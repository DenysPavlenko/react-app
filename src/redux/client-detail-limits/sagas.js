import { takeLatest, put } from 'redux-saga/effects';
import { clientDetailLimitsRequested, clientDetailLimitsLoaded, clientDetailLimitsError } from './actions';
import ClientDetailLimitsService from 'services/client-detail-limits-service';
const clientDetailLimitsService = new ClientDetailLimitsService();

function* fetchClientDetailLimitsDataWorker({ payload: { clientId, detailLimits } }) {
  try {
    const data = yield clientDetailLimitsService.getClientDetailLimits(clientId, detailLimits);
    yield put(clientDetailLimitsLoaded(data));
  } catch ({ message }) {
    yield put(clientDetailLimitsError(message));
  }
}

export function* fetchClientDetailLimitsData() {
  yield takeLatest(clientDetailLimitsRequested().type, fetchClientDetailLimitsDataWorker);
}
