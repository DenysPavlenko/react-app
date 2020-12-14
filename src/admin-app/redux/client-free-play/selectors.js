import { createSelector } from 'reselect';

const clientFreePlaySelector = state => state.clientFreePlay;

export const selectClientFreePlay = createSelector(
  [clientFreePlaySelector],
  clientFreePlay => clientFreePlay
);
