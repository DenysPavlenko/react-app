import { takeLatest, put } from 'redux-saga/effects';
import { myTransactionsRequested, myTransactionsLoaded, myTransactionsError } from './actions';
import MyTransactionsService from 'services/my-transactions-service';
const myTransactionsService = new MyTransactionsService();

function* fetchMyTransactionsDataWorker() {
  try {
    const data = yield myTransactionsService.getMyTransactions();
    yield put(myTransactionsLoaded(data));
  } catch ({ message }) {
    yield put(myTransactionsError(message));
  }
}

export function* fetchMyTransactionsData() {
  yield takeLatest(myTransactionsRequested().type, fetchMyTransactionsDataWorker);
}
