import { createSelector } from 'reselect';

const colorSchemeSelector = state => state.colorScheme;

export const selectColorScheme = createSelector(
  [colorSchemeSelector],
  colorScheme => colorScheme.default
);

export const selectColorSchemes = createSelector(
  [colorSchemeSelector],
  colorScheme => colorScheme.colorSchemes
);
