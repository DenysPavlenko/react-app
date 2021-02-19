import { takeLatest, put } from 'redux-saga/effects';
import { weeklyFiguresRequested, weeklyFiguresLoaded, weeklyFiguresError } from './actions';
import WeeklyFiguresService from 'services/weekly-figures-service';
const weeklyFiguresService = new WeeklyFiguresService();

function* fetchWeeklyFiguresDataWorker() {
  try {
    const data = yield weeklyFiguresService.getWeeklyFigures();
    yield put(weeklyFiguresLoaded(data));
  } catch ({ message }) {
    yield put(weeklyFiguresError(message));
  }
}

export function* fetchWeeklyFiguresData() {
  yield takeLatest(weeklyFiguresRequested().type, fetchWeeklyFiguresDataWorker);
}
