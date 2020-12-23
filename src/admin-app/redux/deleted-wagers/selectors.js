import { createSelector } from 'reselect';

const deletedWagersSelector = state => state.deletedWagers;

export const selectDeletedWagers = createSelector(
  [deletedWagersSelector],
  deletedWagers => deletedWagers
);
