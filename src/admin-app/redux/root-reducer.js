import { combineReducers } from 'redux';
// Shared reducers
import colorSchemeReducer from 'shared/redux/color-scheme/reducer';
import mailReducer from 'shared/redux/mail/reducer';
import settingsReducer from 'shared/redux/settings/reducer';
import personalizeReducer from 'shared/redux/personalize/reducer';
// Reducers
import adminMenuReducer from './admin-menu/reducer';
import balanceReducer from './balance/reducer';
import recentLoginsReducer from './recent-logins/reducer';

const rootReducer = combineReducers({
  colorScheme: colorSchemeReducer,
  settings: settingsReducer,
  personalize: personalizeReducer,
  mail: mailReducer,
  adminMenu: adminMenuReducer,
  balance: balanceReducer,
  recentLogins: recentLoginsReducer,
});

export default rootReducer;
