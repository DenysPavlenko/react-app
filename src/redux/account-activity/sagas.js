import { takeLatest, put } from 'redux-saga/effects';
import { accountActivityRequested, accountActivityLoaded, accountActivityError } from './actions';

import AccountActivityService from 'services/account-activity-service';
const accountActivityService = new AccountActivityService();

function* fetchAccountActivityDataWorker({ payload: { agent, date } }) {
  try {
    const data = yield accountActivityService.getAccountActivity(agent, date)
    yield put(accountActivityLoaded(data))
  } catch (error) {
    yield put(accountActivityError(error))
  }
}

export function* fetchAccountActivityData() {
  yield takeLatest(accountActivityRequested().type, fetchAccountActivityDataWorker)
}
