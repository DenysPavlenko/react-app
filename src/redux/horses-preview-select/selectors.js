import { createSelector } from 'reselect';

const horsesPreviewSelectSelector = state => state.horsesPreviewSelect;

export const selectHorsesPreviewSelect = createSelector(
  [horsesPreviewSelectSelector],
  horsesPreviewSelect => horsesPreviewSelect.isHorsesSelectShown
);
