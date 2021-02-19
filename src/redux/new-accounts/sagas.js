import { takeLatest, put } from 'redux-saga/effects';
import { newAccountsRequested, newAccountsLoaded, newAccountsError } from './actions';
import NewAccountsService from 'services/new-accounts-service';
const newAccountsService = new NewAccountsService();

function* fetchNewAccountsDataWorker() {
  try {
    const data = yield newAccountsService.getNewAccounts();
    yield put(newAccountsLoaded(data));
  } catch ({ message }) {
    yield put(newAccountsError(message));
  }
}

export function* fetchNewAccountsData() {
  yield takeLatest(newAccountsRequested().type, fetchNewAccountsDataWorker);
}
