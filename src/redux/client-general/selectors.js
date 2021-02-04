import { createSelector } from 'reselect';

const clientGeneralSelector = state => state.clientGeneral;

export const selectClientGeneral = createSelector(
  [clientGeneralSelector],
  clientGeneral => clientGeneral
);
