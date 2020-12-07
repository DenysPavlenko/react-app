import { createSelector } from 'reselect';

const adminMenuSelector = state => state.adminMenu;

export const selectAdminMenu = createSelector(
  [adminMenuSelector],
  adminMenu => adminMenu.isActive
);
