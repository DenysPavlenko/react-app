import { combineReducers } from 'redux';
// Shared reducers
import colorSchemeReducer from 'shared/redux/color-scheme/reducer';
import mailReducer from 'shared/redux/mail/reducer';
import settingsReducer from 'shared/redux/settings/reducer';
import personalizeReducer from 'shared/redux/personalize/reducer';
// Reducers
import adminMenuReducer from './admin-menu/reducer';
import adminBalanceReducer from './admin-balance/reducer';
import recentLoginsReducer from './recent-logins/reducer';
import customerListReducer from './customer-list/reducer';
import pendingReducer from './pending/reducer';
import settleReducer from './settle/reducer';
import clientGeneralReducer from './client-general/reducer';
import clientBalanceReducer from './client-balance/reducer';

const rootReducer = combineReducers({
  colorScheme: colorSchemeReducer,
  settings: settingsReducer,
  personalize: personalizeReducer,
  mail: mailReducer,
  adminMenu: adminMenuReducer,
  adminBalance: adminBalanceReducer,
  recentLogins: recentLoginsReducer,
  customerList: customerListReducer,
  pending: pendingReducer,
  settle: settleReducer,
  clientGeneral: clientGeneralReducer,
  clientBalance: clientBalanceReducer,
});

export default rootReducer;
