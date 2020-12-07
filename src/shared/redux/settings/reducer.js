import SettingsActionTypes from './types';

const INITIAL_STATE = {
  isSettingsShown: false
};

const settingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SettingsActionTypes.SHOW_SETTINGS:
      return {
        isSettingsShown: true
      }
    case SettingsActionTypes.HIDE_SETTINGS:
      return {
        isSettingsShown: false
      }
    default:
      return state;
  }
};

export default settingsReducer;
