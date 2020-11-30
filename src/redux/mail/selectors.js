import { createSelector } from 'reselect';

const scoresMail = state => state.mail;

export const selectMailActive = createSelector(
  [scoresMail],
  mail => mail.isActive
);

export const selectMessages = createSelector(
  [scoresMail],
  mail => mail.messages
);

// export const selectMailSent = createSelector(
//   [scoresMail],
//   mail => mail.sent
// );
