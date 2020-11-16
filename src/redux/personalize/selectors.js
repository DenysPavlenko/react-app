import { createSelector } from 'reselect';

const personalizeSelector = state => state.personalize;

export const selectPersonalize = createSelector(
  [personalizeSelector],
  personalize => personalize.isActive
);
