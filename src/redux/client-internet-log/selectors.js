import { createSelector } from 'reselect';

const clientInternetLogSelector = state => state.clientInternetLog;

export const selectClientInternetLog = createSelector(
  [clientInternetLogSelector],
  clientInternetLog => clientInternetLog
);
