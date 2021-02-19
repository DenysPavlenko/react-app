import { takeLatest, put } from 'redux-saga/effects';
import { clientGeneralRequested, clientGeneralLoaded, clientGeneralError } from './actions';
import ClientGeneralService from 'services/client-general-service';
const clientGeneralService = new ClientGeneralService();

function* fetchClientGeneralDataWorker({ payload }) {
  try {
    const data = yield clientGeneralService.getClientGeneral(payload);
    yield put(clientGeneralLoaded(data));
  } catch ({ message }) {
    yield put(clientGeneralError(message));
  }
}

export function* fetchClientGeneralData() {
  yield takeLatest(clientGeneralRequested().type, fetchClientGeneralDataWorker);
}
