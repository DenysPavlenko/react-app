import { createSelector } from 'reselect';

const scoresMail = state => state.mail;

export const selectMailActive = createSelector(
  [scoresMail],
  mail => mail.isActive
);

export const selectMailInbox = createSelector(
  [scoresMail],
  mail => mail.inbox
);

export const selectMailSent = createSelector(
  [scoresMail],
  mail => mail.sent
);
