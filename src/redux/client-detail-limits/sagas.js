import { takeLatest, put } from 'redux-saga/effects';
import { clientDetailLimitsRequested, clientDetailLimitsLoaded, clientDetailLimitsError } from './actions';
import ClientDetailLimitsService from 'services/client-detail-limits-service';
const clientDetailLimitsService = new ClientDetailLimitsService();

function* fetchClientDetailLimitsDataWorker({ payload: { clientId, category } }) {
  try {
    const data = yield clientDetailLimitsService.getClientDetailLimits(clientId, category);
    yield put(clientDetailLimitsLoaded(data));
  } catch (error) {
    yield put(clientDetailLimitsError(error));
  }
}

export function* fetchClientDetailLimitsData() {
  yield takeLatest(clientDetailLimitsRequested().type, fetchClientDetailLimitsDataWorker);
}
