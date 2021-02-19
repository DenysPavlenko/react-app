import { takeLatest, put } from 'redux-saga/effects';
import { biggestPendingWagersRequested, biggestPendingWagersLoaded, biggestPendingWagersError } from './actions';
import BiggestPendingWagersService from 'services/biggest-pending-wagers-service';
const biggestPendingWagersService = new BiggestPendingWagersService();

function* fetchBiggestPendingWagersDataWorker() {
  try {
    const data = yield biggestPendingWagersService.getBiggestPendingWagers();
    yield put(biggestPendingWagersLoaded(data));
  } catch ({ message }) {
    yield put(biggestPendingWagersError(message));
  }
}

export function* fetchBiggestPendingWagersData() {
  yield takeLatest(biggestPendingWagersRequested().type, fetchBiggestPendingWagersDataWorker);
}
