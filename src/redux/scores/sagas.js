import { takeLatest, put } from 'redux-saga/effects';
import { scoresRequested, scoresLoaded, scoresError } from './actions';
import ScoresService from 'services/scores-service';
const scoresService = new ScoresService();

function* fetchScoresDataWorker() {
  try {
    const data = yield scoresService.getScores();
    yield put(scoresLoaded(data));
  } catch ({ message }) {
    yield put(scoresError(message));
  }
}

export function* fetchScoresData() {
  yield takeLatest(scoresRequested().type, fetchScoresDataWorker);
}
