import { combineReducers } from 'redux';
import userReducer from 'redux/user/reducer';
import colorSchemeReducer from 'redux/color-scheme/reducer';
import mailReducer from 'redux/mail/reducer';
import settingsReducer from 'redux/settings/reducer';
import personalizeReducer from 'redux/personalize/reducer';
import SideMenuReducer from './side-menu/reducer';
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
import scoresReducer from './scores/reducer';
import weeklyFiguresReducer from './weekly-figures/reducer';
import pendingWagersReducer from './pending-wagers/reducer';
import myTransactionsReducer from './my-transactions/reducer';
import sportsReducer from './sports/reducer';
import sportsScheduleReducer from './sports-schedule/reducer';
import sportsScheduleEventsReducer from './sports-schedule-events/reducer';
import sportsPageScheduleReducer from './sports-page-schedule/reducer';
import sportsPageWagersReducer from './sports-page-wagers/reducer';
import sportsWagersReducer from './sports-wagers/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  colorScheme: colorSchemeReducer,
  settings: settingsReducer,
  personalize: personalizeReducer,
  mail: mailReducer,
  SideMenu: SideMenuReducer,
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
  scores: scoresReducer,
  weeklyFigures: weeklyFiguresReducer,
  pendingWagers: pendingWagersReducer,
  myTransactions: myTransactionsReducer,
  sports: sportsReducer,
  sportsSchedule: sportsScheduleReducer,
  sportsPageSchedule: sportsPageScheduleReducer,
  sportsPageWagers: sportsPageWagersReducer,
  sportsScheduleEvents: sportsScheduleEventsReducer,
  sportsWagers: sportsWagersReducer,
});

export default rootReducer;
