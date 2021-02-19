import { all, call } from 'redux-saga/effects';
// Sagas
import { fetchAccountActivityData } from './account-activity/sagas';
import { fetchAccountsClosedData } from './accounts-closed/sagas';

function* rootSaga() {
  yield all([
    call(fetchAccountActivityData),
    call(fetchAccountsClosedData),
  ])
}

export default rootSaga;
