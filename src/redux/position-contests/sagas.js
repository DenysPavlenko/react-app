import { takeLatest, put } from 'redux-saga/effects';
import { positionContestsRequested, positionContestsLoaded, positionContestsError } from './actions';
import PositionContestsService from 'services/position-contests-service';
const positionContestsService = new PositionContestsService();

function* fetchPositionContestsDataWorker({ payload }) {
  try {
    const data = yield positionContestsService.getPositionContests(payload);
    yield put(positionContestsLoaded(data));
  } catch ({ message }) {
    yield put(positionContestsError(message));
  }
}

export function* fetchPositionContestsData() {
  yield takeLatest(positionContestsRequested().type, fetchPositionContestsDataWorker);
}
