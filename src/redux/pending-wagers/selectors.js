import { createSelector } from 'reselect';

const pendingWagersSelector = state => state.pendingWagers;

export const selectPendingWagers = createSelector(
  [pendingWagersSelector],
  pendingWagers => pendingWagers
);

export const selectTotalRisk = createSelector(
  [pendingWagersSelector],
  pendingWagers => pendingWagers.data && pendingWagers.data.reduce((acc, item) => acc + parseInt(item.risk), 0)
);

export const selectTotalWin = createSelector(
  [pendingWagersSelector],
  pendingWagers => pendingWagers.data && pendingWagers.data.reduce((acc, item) => acc + parseInt(item.toWin), 0)
);
