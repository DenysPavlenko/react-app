import { combineReducers } from 'redux';
// Reducers
import personalize from './personalize/reducer';

const rootReducer = combineReducers({
  personalize: personalize,
});

export default rootReducer;
