import { createSelector } from 'reselect';

const positionGamesSelector = state => state.positionGames;

export const selectPositionGames = createSelector(
  [positionGamesSelector],
  positionGames => positionGames
);
