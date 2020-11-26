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
import HorsesTracksReducer from './horses-tracks/reducer';
import HorsesBetsReducer from './horses-bets/reducer';

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
  horsesTracks: HorsesTracksReducer,
  horsesBets: HorsesBetsReducer,
});

export default rootReducer;
