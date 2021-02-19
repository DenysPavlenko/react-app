import { takeLatest, put } from 'redux-saga/effects';
import { recentLoginsRequested, recentLoginsLoaded, recentLoginsError } from './actions';
import RecentLoginsService from 'services/recent-logins-service';
const recentLoginsService = new RecentLoginsService();

function* fetchRecentLoginsDataWorker() {
  try {
    const data = yield recentLoginsService.getRecentLogins();
    yield put(recentLoginsLoaded(data));
  } catch ({ message }) {
    yield put(recentLoginsError(message));
  }
}

export function* fetchRecentLoginsData() {
  yield takeLatest(recentLoginsRequested().type, fetchRecentLoginsDataWorker);
}
