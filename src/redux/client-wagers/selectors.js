import { createSelector } from 'reselect';

const clientWagersSelector = state => state.clientWagers;

export const selectClientWagers = createSelector(
  [clientWagersSelector],
  clientWagers => clientWagers
);
