import { takeLatest, put } from 'redux-saga/effects';
import { sportsScheduleRequested, sportsScheduleLoaded, sportsScheduleError } from './actions';
import SportsScheduleService from 'services/sports-schedule-service';
const sportsScheduleService = new SportsScheduleService();

function* fetchSportsScheduleDataWorker() {
  try {
    const data = yield sportsScheduleService.getSportsSchedule();
    yield put(sportsScheduleLoaded(data));
  } catch ({ message }) {
    yield put(sportsScheduleError(message));
  }
}

export function* fetchSportsScheduleData() {
  yield takeLatest(sportsScheduleRequested().type, fetchSportsScheduleDataWorker);
}
