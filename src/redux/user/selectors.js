import { createSelector } from 'reselect';

const userSelector = state => state.user;

export const selectUser = createSelector(
  [userSelector],
  user => user
);

export const selectBalance = createSelector(
  [userSelector],
  user => user.data ? user.data.balance : {}
);

export const selectUserName = createSelector(
  [userSelector],
  user => user.data ? user.data.name : ''
);
