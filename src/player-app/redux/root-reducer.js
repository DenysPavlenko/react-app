import { combineReducers } from 'redux';
// Shared reducers
import colorSchemeReducer from 'shared/redux/color-scheme/reducer';
import mailReducer from 'shared/redux/mail/reducer';
import settingsReducer from 'shared/redux/settings/reducer';
import personalizeReducer from 'shared/redux/personalize/reducer';
import userReducer from 'shared/redux/user/reducer';
// Reducers
import sportsScheduleReducer from './sports-schedule/reducer';
import sportsReducer from './sports/reducer';
import sportsScheduleEventsReducer from './sports-schedule-events/reducer';
import sportsPageScheduleReducer from './sports-page-schedule/reducer';
import liveProgramReducer from './live-program/reducer';
import liveMarketsReducer from './live-markets/reducer';
import livePlayProgramReducer from './live-play-program/reducer';
import livePendingReducer from './live-pending/reducer';
import liveHistoryReducer from './live-history/reducer';
import casinoGamesReducer from './casino-games/reducer';
import horsesTracksReducer from './horses-tracks/reducer';
import horsesBetsReducer from './horses-bets/reducer';
import horsesPreviewSelectReducer from './horses-preview-select/reducer';
import sportsWagersReducer from './sports-wagers/reducer';
import scoresReducer from './scores/reducer';
import weeklyFiguresReducer from './weekly-figures/reducer';
import pendingWagersReducer from './pending-wagers/reducer';
import transactionsReducer from './transactions/reducer';
import sportsPageWagersReducer from './sports-page-wagers/reducer';
import horsesBettingsReducer from './horses-bettings/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  colorScheme: colorSchemeReducer,
  settings: settingsReducer,
  personalize: personalizeReducer,
  mail: mailReducer,
  sportsSchedule: sportsScheduleReducer,
  sports: sportsReducer,
  sportsScheduleEvents: sportsScheduleEventsReducer,
  sportsPageSchedule: sportsPageScheduleReducer,
  liveProgram: liveProgramReducer,
  liveMarkets: liveMarketsReducer,
  livePlayProgram: livePlayProgramReducer,
  livePending: livePendingReducer,
  liveHistory: liveHistoryReducer,
  casinoGames: casinoGamesReducer,
  horsesTracks: horsesTracksReducer,
  horsesBets: horsesBetsReducer,
  horsesPreviewSelect: horsesPreviewSelectReducer,
  sportsWagers: sportsWagersReducer,
  scores: scoresReducer,
  weeklyFigures: weeklyFiguresReducer,
  pendingWagers: pendingWagersReducer,
  transactions: transactionsReducer,
  sportsPageWagers: sportsPageWagersReducer,
  horsesBettings: horsesBettingsReducer,
});

export default rootReducer;
