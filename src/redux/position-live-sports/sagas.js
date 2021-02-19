import { takeLatest, put } from 'redux-saga/effects';
import { positionLiveSportsRequested, positionLiveSportsLoaded, positionLiveSportsError } from './actions';
import PositionLiveSportsService from 'services/position-live-sports-service';
const positionLiveSportsService = new PositionLiveSportsService();

function* fetchPositionLiveSportsDataWorker() {
  try {
    const data = yield positionLiveSportsService.getPositionToday();
    yield put(positionLiveSportsLoaded(data));
  } catch ({ message }) {
    yield put(positionLiveSportsError(message));
  }
}

export function* fetchPositionLiveSportsData() {
  yield takeLatest(positionLiveSportsRequested().type, fetchPositionLiveSportsDataWorker);
}
