import { takeLatest, put } from 'redux-saga/effects';
import { figuresRequested, figuresLoaded, figuresError } from './actions';
import FiguresService from 'services/figures-service';
const figuresService = new FiguresService();

function* fetchFiguresDataWorker({ payload: { date, status } }) {
  try {
    const data = yield figuresService.getFigures(date, status);
    yield put(figuresLoaded(data));
  } catch ({ message }) {
    yield put(figuresError(message));
  }
}

export function* fetchFiguresData() {
  yield takeLatest(figuresRequested().type, fetchFiguresDataWorker);
}
