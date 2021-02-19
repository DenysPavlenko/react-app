import { takeLatest, put } from 'redux-saga/effects';
import { sportsRequested, sportsLoaded, sportsError } from './actions';
import SportsService from 'services/sports-service';
const sportsService = new SportsService();

function* fetchSportsDataWorker() {
  try {
    const data = yield sportsService.getSports();
    yield put(sportsLoaded(data));
  } catch ({ message }) {
    yield put(sportsError(message));
  }
}

export function* fetchSportsData() {
  yield takeLatest(sportsRequested().type, fetchSportsDataWorker);
}
