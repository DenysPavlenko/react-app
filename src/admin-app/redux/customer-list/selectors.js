import { createSelector } from 'reselect';

const customerListSelector = state => state.customerList;

export const selectCustomerList = createSelector(
  [customerListSelector],
  customerList => customerList
);
