import SportsWagersTypes from './types';

export const addSportsWager = wager => ({
  type: SportsWagersTypes.TOGGLE_SPORTS_WAGER,
  payload: wager
});

export const removeSportsWager = id => ({
  type: SportsWagersTypes.REMOVE_SPORTS_WAGER,
  payload: id
});

export const clearSportsWagers = () => ({
  type: SportsWagersTypes.CLEAR_SPORTS_WAGERS,
});

export const addRiskAndWin = (id, risk, toWin) => ({
  type: SportsWagersTypes.ADD_RISK_AND_WIN,
  payload: { id, risk, toWin }
});
