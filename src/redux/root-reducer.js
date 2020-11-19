import { combineReducers } from 'redux';
// Reducers
import personalizeReducer from './personalize/reducer';
import colorSchemeReducer from './color-scheme/reducer';
import sportsScheduleReducer from './sports-schedule/reducer';
import sportsScheduleEventsReducer from './sports-schedule-events/reducer';
import sportsPageScheduleReducer from './sports-page-schedule/reducer';

const rootReducer = combineReducers({
  personalize: personalizeReducer,
  colorScheme: colorSchemeReducer,
  sportsSchedule: sportsScheduleReducer,
  sportsScheduleEvents: sportsScheduleEventsReducer,
  sportsPageSchedule: sportsPageScheduleReducer,
});

export default rootReducer;
