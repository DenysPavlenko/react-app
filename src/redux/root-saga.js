import { all, call } from 'redux-saga/effects';
// Sagas
import { fetchAccountActivityData } from './account-activity/sagas';
import { fetchAccountsClosedData } from './accounts-closed/sagas';
import { fetchActiveCustomersData } from './active-customers/sagas';
import { fetchActivePlayersData } from './active-players/sagas';
import { fetchAgentsData } from './agents/sagas';
import { fetchBiggestPendingWagersData } from './biggest-pending-wagers/sagas';
import { fetchCashierData } from './cashier/sagas';

function* rootSaga() {
  yield all([
    call(fetchAccountActivityData),
    call(fetchAccountsClosedData),
    call(fetchActiveCustomersData),
    call(fetchActivePlayersData),
    call(fetchAgentsData),
    call(fetchBiggestPendingWagersData),
    call(fetchCashierData),
  ])
}

export default rootSaga;
