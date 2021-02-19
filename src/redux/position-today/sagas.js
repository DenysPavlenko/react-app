import { takeLatest, put } from 'redux-saga/effects';
import { positionTodayRequested, positionTodayLoaded, positionTodayError } from './actions';
import PositionTodayService from 'services/position-today-service';
const positionTodayService = new PositionTodayService();

function* fetchPositionTodayDataWorker() {
  try {
    const data = yield positionTodayService.getPositionToday();
    yield put(positionTodayLoaded(data));
  } catch ({ message }) {
    yield put(positionTodayError(message));
  }
}

export function* fetchPositionTodayData() {
  yield takeLatest(positionTodayRequested().type, fetchPositionTodayDataWorker);
}
