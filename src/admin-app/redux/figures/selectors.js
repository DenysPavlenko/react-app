import { createSelector } from 'reselect';

const figuresSelector = state => state.figures;

export const selectFigures = createSelector(
  [figuresSelector],
  figures => figures
);
