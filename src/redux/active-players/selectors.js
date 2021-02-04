import { createSelector } from 'reselect';

const activePlayersSelector = state => state.activePlayers;

export const selectActivePlayers = createSelector(
  [activePlayersSelector],
  activePlayers => activePlayers
);

export const selectShowActivePlayers = createSelector(
  [activePlayersSelector],
  activePlayers => activePlayers.isActive
);
