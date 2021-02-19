import { takeLatest, put } from 'redux-saga/effects';
import { clientWagersRequested, clientWagersLoaded, clientWagersError } from './actions';
import ClientWagersService from 'services/client-wagers-service';
const clientWagersService = new ClientWagersService();

function* fetchClientWagersDataWorker({ payload: { clientId, filterDays } }) {
  try {
    const data = yield clientWagersService.getClientWagers(clientId, filterDays);
    yield put(clientWagersLoaded(data));
  } catch ({ message }) {
    yield put(clientWagersError(message));
  }
}

export function* fetchClientWagersData() {
  yield takeLatest(clientWagersRequested().type, fetchClientWagersDataWorker);
}
