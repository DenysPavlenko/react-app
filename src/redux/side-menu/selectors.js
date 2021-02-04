import { createSelector } from 'reselect';

const SideMenuSelector = state => state.SideMenu;

export const selectSideMenu = createSelector(
  [SideMenuSelector],
  SideMenu => SideMenu.isActive
);
