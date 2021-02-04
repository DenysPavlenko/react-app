import { createSelector } from 'reselect';

const activeCustomersSelector = state => state.activeCustomers;

export const selectActiveCustomers = createSelector(
  [activeCustomersSelector],
  activeCustomers => activeCustomers
);

export const selectShowActiveCustomers = createSelector(
  [activeCustomersSelector],
  activeCustomers => activeCustomers.isActive
);
