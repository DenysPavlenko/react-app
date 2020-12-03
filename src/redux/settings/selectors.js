import { createSelector } from 'reselect';

const settingsSelector = state => state.settings;

export const selectSettings = createSelector(
  [settingsSelector],
  settings => settings.isSettingsShown
);
