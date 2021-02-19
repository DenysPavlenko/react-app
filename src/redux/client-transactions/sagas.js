import { takeLatest, put } from 'redux-saga/effects';
import { clientTransactionsRequested, clientTransactionsLoaded, clientTransactionsError } from './actions';
import ClientTransactionsService from 'services/client-transactions-service';
const clientTransactionsService = new ClientTransactionsService();

function* fetchClientTransactionsDataWorker({ payload }) {
  try {
    const data = yield clientTransactionsService.getClientTransactions(payload);
    yield put(clientTransactionsLoaded(data));
  } catch ({ message }) {
    yield put(clientTransactionsError(message));
  }
}

export function* fetchClientTransactionsData() {
  yield takeLatest(clientTransactionsRequested().type, fetchClientTransactionsDataWorker);
}
