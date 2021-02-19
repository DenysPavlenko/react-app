import { all, call } from 'redux-saga/effects';
// Sagas
import { fetchAccountActivityData } from './account-activity/sagas';
import { fetchAccountsClosedData } from './accounts-closed/sagas';
import { fetchActiveCustomersData } from './active-customers/sagas';
import { fetchActivePlayersData } from './active-players/sagas';
import { fetchAgentsData } from './agents/sagas';
import { fetchBiggestPendingWagersData } from './biggest-pending-wagers/sagas';
import { fetchCashierData } from './cashier/sagas';
import { fetchClientAccountingData } from './client-accounting/sagas';
import { fetchClientBalanceData } from './client-balance/sagas';
import { fetchClientDetailLimitsData } from './client-detail-limits/sagas';
import { fetchClientFreePlayData } from './client-free-play/sagas';
import { fetchClientGeneralData } from './client-general/sagas';
import { fetchClientHistoryData } from './client-history/sagas';
import { fetchClientInternetLogData } from './client-internet-log/sagas';
import { fetchClientLimitsData } from './client-limits/sagas';
import { fetchClientPendingData } from './client-pending/sagas';
import { fetchClientTransactionsData } from './client-transactions/sagas';

function* rootSaga() {
  yield all([
    call(fetchAccountActivityData),
    call(fetchAccountsClosedData),
    call(fetchActiveCustomersData),
    call(fetchActivePlayersData),
    call(fetchAgentsData),
    call(fetchBiggestPendingWagersData),
    call(fetchCashierData),
    call(fetchClientAccountingData),
    call(fetchClientBalanceData),
    call(fetchClientDetailLimitsData),
    call(fetchClientFreePlayData),
    call(fetchClientGeneralData),
    call(fetchClientHistoryData),
    call(fetchClientInternetLogData),
    call(fetchClientLimitsData),
    call(fetchClientPendingData),
    call(fetchClientTransactionsData),
  ])
}

export default rootSaga;
