import { combineReducers } from 'redux';
// Reducers
import personalize from './personalize/reducer';
import colorScheme from './color-scheme/reducer';

const rootReducer = combineReducers({
  personalize: personalize,
  colorScheme: colorScheme,
});

export default rootReducer;
