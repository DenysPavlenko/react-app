import { combineReducers } from 'redux';
// Shared reducers
import userReducer from 'shared/redux/user/reducer';
import colorSchemeReducer from 'shared/redux/color-scheme/reducer';
import mailReducer from 'shared/redux/mail/reducer';
import settingsReducer from 'shared/redux/settings/reducer';
import personalizeReducer from 'shared/redux/personalize/reducer';
// Reducers
import adminMenuReducer from './admin-menu/reducer';
import recentLoginsReducer from './recent-logins/reducer';
import customerListReducer from './customer-list/reducer';
import pendingReducer from './pending/reducer';
import settleReducer from './settle/reducer';
import clientBalanceReducer from './client-balance/reducer';
import clientGeneralReducer from './client-general/reducer';
import clientAccountingReducer from './client-accounting/reducer';
import clientLimitsReducer from './client-limits/reducer';
import clientWagersReducer from './client-wagers/reducer';
import clientPendingReducer from './client-pending/reducer';
import clientTransactionsReducer from './client-transactions/reducer';
import clientHistoryReducer from './client-history/reducer';
import clientFreePlayReducer from './client-free-play/reducer';
import clientDetailLimitsReducer from './client-detail-limits/reducer';
import clientInternetLogReducer from './client-internet-log/reducer';
import figuresReducer from './figures/reducer';
import distributionReducer from './distribution/reducer';
import positionTodayReducer from './position-today/reducer';
import positionLiveSportsReducer from './position-live-sports/reducer';
import positionGamesReducer from './position-games/reducer';
import positionContestsReducer from './position-contests/reducer';
import agentsReducer from './agents/reducer';
import newAccountsReducer from './new-accounts/reducer';
import cashierReducer from './cashier/reducer';
import activePlayersReducer from './active-players/reducer';
import deletedWagersReducer from './deleted-wagers/reducer';
import accountsClosedReducer from './accounts-closed/reducer';
import agentsListReducer from './agents-list/reducer';
import activeCustomersReducer from './active-customers/reducer';
import pendingBetsReducer from './pending-bets/reducer';
import accountActivityReducer from './account-activity/reducer';
import transactionsReducer from './transactions/reducer';
import biggestPendingWagersReducer from './biggest-pending-wagers/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  colorScheme: colorSchemeReducer,
  settings: settingsReducer,
  personalize: personalizeReducer,
  mail: mailReducer,
  adminMenu: adminMenuReducer,
  recentLogins: recentLoginsReducer,
  customerList: customerListReducer,
  pending: pendingReducer,
  settle: settleReducer,
  clientBalance: clientBalanceReducer,
  clientGeneral: clientGeneralReducer,
  clientAccounting: clientAccountingReducer,
  clientLimits: clientLimitsReducer,
  clientWagers: clientWagersReducer,
  clientPending: clientPendingReducer,
  clientTransactions: clientTransactionsReducer,
  clientHistory: clientHistoryReducer,
  clientFreePlay: clientFreePlayReducer,
  clientDetailLimits: clientDetailLimitsReducer,
  clientInternetLog: clientInternetLogReducer,
  figures: figuresReducer,
  distribution: distributionReducer,
  positionToday: positionTodayReducer,
  positionLiveSports: positionLiveSportsReducer,
  positionGames: positionGamesReducer,
  positionContests: positionContestsReducer,
  agents: agentsReducer,
  newAccounts: newAccountsReducer,
  cashier: cashierReducer,
  activePlayers: activePlayersReducer,
  deletedWagers: deletedWagersReducer,
  accountsClosed: accountsClosedReducer,
  agentsList: agentsListReducer,
  activeCustomers: activeCustomersReducer,
  pendingBets: pendingBetsReducer,
  accountActivity: accountActivityReducer,
  transactions: transactionsReducer,
  biggestPendingWagers: biggestPendingWagersReducer,
});

export default rootReducer;
