import SettingsTypes from './types';

const INITIAL_STATE = {
  isSettingsShown: false
};

const settingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SettingsTypes.SHOW_SETTINGS:
      return {
        isSettingsShown: true
      }
    case SettingsTypes.HIDE_SETTINGS:
      return {
        isSettingsShown: false
      }
    default:
      return state;
  }
};

export default settingsReducer;
