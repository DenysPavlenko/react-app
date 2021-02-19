import { all, call } from 'redux-saga/effects';
// Sagas
import { fetchAccountActivityData } from './account-activity/sagas';
import { fetchAccountsClosedData } from './accounts-closed/sagas';
import { fetchActiveCustomersData } from './active-customers/sagas';

function* rootSaga() {
  yield all([
    call(fetchAccountActivityData),
    call(fetchAccountsClosedData),
    call(fetchActiveCustomersData),
  ])
}

export default rootSaga;
