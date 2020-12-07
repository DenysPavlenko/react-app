import { createSelector } from 'reselect';

const recentLoginsSelector = state => state.recentLogins;

export const selectRecentLogins = createSelector(
  [recentLoginsSelector],
  recentLogins => recentLogins
);
