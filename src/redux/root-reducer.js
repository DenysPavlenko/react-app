import { combineReducers } from 'redux';
// Reducers
import personalizeReducer from './personalize/reducer';
import colorSchemeReducer from './color-scheme/reducer';
import sportsScheduleReducer from './sports-schedule/reducer';
import sportsScheduleEventsReducer from './sports-schedule-events/reducer';
import sportsPageScheduleReducer from './sports-page-schedule/reducer';
import liveProgramReducer from './live-program/reducer';
import liveMarketsReducer from './live-markets/reducer';
import livePlayProgram from './live-play-program/reducer';
import livePendingReducer from './live-pending/reducer';
import liveHistoryReducer from './live-history/reducer';
import casinoGamesReducer from './casino-games/reducer';
import horsesTracksReducer from './horses-tracks/reducer';
import horsesBetsReducer from './horses-bets/reducer';
import horsesPreviewSelectReducer from './horses-preview-select/reducer';
import sportsWagersReducer from './sports-wagers/reducer';
import scoresReducer from './scores/reducer';
import mailReducer from './mail/reducer';
import weeklyFiguresReducer from './weekly-figures/reducer';
import pendingWagersReducer from './pending-wagers/reducer';
import transactionsReducer from './transactions/reducer';

const rootReducer = combineReducers({
  personalize: personalizeReducer,
  colorScheme: colorSchemeReducer,
  sportsSchedule: sportsScheduleReducer,
  sportsScheduleEvents: sportsScheduleEventsReducer,
  sportsPageSchedule: sportsPageScheduleReducer,
  liveProgram: liveProgramReducer,
  liveMarkets: liveMarketsReducer,
  livePlayProgram: livePlayProgram,
  livePending: livePendingReducer,
  liveHistory: liveHistoryReducer,
  casinoGames: casinoGamesReducer,
  horsesTracks: horsesTracksReducer,
  horsesBets: horsesBetsReducer,
  horsesPreviewSelect: horsesPreviewSelectReducer,
  sportsWagers: sportsWagersReducer,
  scores: scoresReducer,
  mail: mailReducer,
  weeklyFigures: weeklyFiguresReducer,
  pendingWagers: pendingWagersReducer,
  transactions: transactionsReducer,
});

export default rootReducer;
