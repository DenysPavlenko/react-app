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
import { fetchClientWagersData } from './client-wagers/sagas';
import { fetchCustomerListData } from './customer-list/sagas';
import { fetchDeletedWagersData } from './deleted-wagers/sagas';
import { fetchDistributionData } from './distribution/sagas';
import { fetchFiguresData } from './figures/sagas';
import { fetchMessages } from './mail/sagas';
import { fetchMyTransactionsData } from './my-transactions/sagas';
import { fetchNewAccountsData } from './new-accounts/sagas';
import { fetchPendingData } from './pending/sagas';
import { fetchPendingBetsData } from './pending-bets/sagas';
import { fetchPendingWagersData } from './pending-wagers/sagas';
import { fetchPositionContestsData } from './position-contests/sagas';
import { fetchPositionGamesData } from './position-games/sagas';
import { fetchPositionLiveSportsData } from './position-live-sports/sagas';
import { fetchPositionTodayData } from './position-today/sagas';
import { fetchRecentLoginsData } from './recent-logins/sagas';
import { fetchScoresData } from './scores/sagas';
import { fetchSettleData } from './settle/sagas';
import { fetchSportsData } from './sports/sagas';
import { fetchSportsScheduleData } from './sports-schedule/sagas';
import { fetchTransactionsData } from './transactions/sagas';
import { fetchUserData } from './user/sagas';
import { fetchWeeklyFiguresData } from './weekly-figures/sagas';

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
    call(fetchClientWagersData),
    call(fetchCustomerListData),
    call(fetchDeletedWagersData),
    call(fetchDistributionData),
    call(fetchFiguresData),
    call(fetchMessages),
    call(fetchMyTransactionsData),
    call(fetchNewAccountsData),
    call(fetchPendingData),
    call(fetchPendingBetsData),
    call(fetchPendingWagersData),
    call(fetchPositionContestsData),
    call(fetchPositionGamesData),
    call(fetchPositionLiveSportsData),
    call(fetchPositionTodayData),
    call(fetchRecentLoginsData),
    call(fetchScoresData),
    call(fetchSettleData),
    call(fetchSportsData),
    call(fetchSportsScheduleData),
    call(fetchTransactionsData),
    call(fetchUserData),
    call(fetchWeeklyFiguresData),
  ])
}

export default rootSaga;
