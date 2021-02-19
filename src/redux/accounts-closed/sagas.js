import { takeLatest, put } from 'redux-saga/effects';
import { accountsClosedRequested, accountsClosedLoaded, accountsClosedError } from './actions';
import AccountsClosedService from 'services/accounts-closed-service';
const accountsClosedService = new AccountsClosedService();

function* fetchAccountsClosedDataWorker() {
  try {
    const data = yield accountsClosedService.getAccountsClosed();
    yield put(accountsClosedLoaded(data));
  } catch ({ message }) {
    yield put(accountsClosedError(message));
  }
};

export function* fetchAccountsClosedData() {
  yield takeLatest(accountsClosedRequested().type, fetchAccountsClosedDataWorker)
};
