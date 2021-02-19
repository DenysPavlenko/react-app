import { takeLatest, put } from 'redux-saga/effects';
import { transactionsRequested, transactionsLoaded, transactionsError } from './actions';
import TransactionsService from 'services/transactions-service';
const transactionsService = new TransactionsService();

function* fetchTransactionsDataWorker({ payload }) {
  try {
    const data = yield transactionsService.getTransactions(payload);
    yield put(transactionsLoaded(data));
  } catch ({ message }) {
    yield put(transactionsError(message));
  }
}

export function* fetchTransactionsData() {
  yield takeLatest(transactionsRequested().type, fetchTransactionsDataWorker);
}
