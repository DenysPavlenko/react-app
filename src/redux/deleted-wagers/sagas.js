import { takeLatest, put } from 'redux-saga/effects';
import { deletedWagersRequested, deletedWagersLoaded, deletedWagersError } from './actions';
import DeletedWagersService from 'services/deleted-wagers-service';
const deletedWagersService = new DeletedWagersService();

function* fetchDeletedWagersDataWorker({ payload }) {
  try {
    const data = yield deletedWagersService.getDeletedWagers(payload);
    yield put(deletedWagersLoaded(data));
  } catch ({ message }) {
    yield put(deletedWagersError(message));
  }
}

export function* fetchDeletedWagersData() {
  yield takeLatest(deletedWagersRequested().type, fetchDeletedWagersDataWorker);
}
