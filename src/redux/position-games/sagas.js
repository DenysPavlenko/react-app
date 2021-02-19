import { takeLatest, put } from 'redux-saga/effects';
import { positionGamesRequested, positionGamesLoaded, positionGamesError } from './actions';
import PositionGamesService from 'services/position-games-service';
const positionGamesService = new PositionGamesService();

function* fetchPositionGamesDataWorker({ payload: { activeGame, activeSubFilter } }) {
  try {
    const data = yield positionGamesService.getPositionGames(activeGame, activeSubFilter);
    yield put(positionGamesLoaded(data));
  } catch ({ message }) {
    yield put(positionGamesError(message));
  }
}

export function* fetchPositionGamesData() {
  yield takeLatest(positionGamesRequested().type, fetchPositionGamesDataWorker);
}
