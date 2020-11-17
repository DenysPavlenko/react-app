import { combineReducers } from 'redux';
// Reducers
import personalizeReducer from './personalize/reducer';
import colorSchemeReducer from './color-scheme/reducer';
import sportsScheduleReducer from './sports-schedule/reducer';

const rootReducer = combineReducers({
  personalize: personalizeReducer,
  colorScheme: colorSchemeReducer,
  sportsSchedule: sportsScheduleReducer,
});

export default rootReducer;
