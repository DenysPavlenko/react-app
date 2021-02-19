import { all, call } from 'redux-saga/effects';
// Sagas
import { fetchAccountActivityData } from './account-activity/sagas';
import { fetchAccountsClosedData } from './accounts-closed/sagas';
import { fetchActiveCustomersData } from './active-customers/sagas';
import { fetchActivePlayersData } from './active-players/sagas';

function* rootSaga() {
  yield all([
    call(fetchAccountActivityData),
    call(fetchAccountsClosedData),
    call(fetchActiveCustomersData),
    call(fetchActivePlayersData),
  ])
}

export default rootSaga;
