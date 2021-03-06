import { takeLatest, put } from 'redux-saga/effects';
import { activeCustomersRequested, activeCustomersLoaded, activeCustomersError } from './actions';
import ActiveCustomersService from 'services/active-customers-service';
const activeCustomersService = new ActiveCustomersService();

function* fetchActiveCustomersDataWorker({ payload: { agent } }) {
  try {
    const data = yield activeCustomersService.getActiveCustomers(agent);
    yield put(activeCustomersLoaded(data));
  } catch ({ message }) {
    yield put(activeCustomersError(message));
  }
}

export function* fetchActiveCustomersData() {
  yield takeLatest(activeCustomersRequested().type, fetchActiveCustomersDataWorker);
};
