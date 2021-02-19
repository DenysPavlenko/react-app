import { takeLatest, put } from 'redux-saga/effects';
import { activePlayersRequested, activePlayersError, activePlayersLoaded } from './actions';
import ActivePlayersService from 'services/active-players-service';
const activePlayersService = new ActivePlayersService();

function* fetchActivePlayersDataWorker() {
  try {
    const data = yield activePlayersService.getActivePlayers();
    yield put(activePlayersLoaded(data));
  } catch (error) {
    yield put(activePlayersError(error));
  }
}

export function* fetchActivePlayersData() {
  yield takeLatest(activePlayersRequested().type, fetchActivePlayersDataWorker);
};
