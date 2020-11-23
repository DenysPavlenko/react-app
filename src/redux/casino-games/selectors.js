import { createSelector } from 'reselect';

const casinoGamesSelector = state => state.casinoGames;

export const selectCasinoGames = createSelector(
  [casinoGamesSelector],
  casinoGames => casinoGames
);
