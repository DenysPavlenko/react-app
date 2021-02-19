import { takeLatest, put } from 'redux-saga/effects';
import { distributionRequested, distributionLoaded, distributionError } from './actions';
import DistributionService from 'services/distribution-service';
const distributionService = new DistributionService();

function* fetchDistributionDataWorker({ payload }) {
  try {
    const data = yield distributionService.getDistribution(payload);
    yield put(distributionLoaded(data));
  } catch ({ message }) {
    yield put(distributionError(message));
  }
}

export function* fetchDistributionData() {
  yield takeLatest(distributionRequested().type, fetchDistributionDataWorker);
}
