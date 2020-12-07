import SportsWagersActionTypes from './types';

export const addSportsWager = wager => ({
  type: SportsWagersActionTypes.TOGGLE_SPORTS_WAGER,
  payload: wager
});

export const removeSportsWager = id => ({
  type: SportsWagersActionTypes.REMOVE_SPORTS_WAGER,
  payload: id
});

export const clearSportsWagers = () => ({
  type: SportsWagersActionTypes.CLEAR_SPORTS_WAGERS,
});

export const addRiskAndWin = (id, risk, toWin) => ({
  type: SportsWagersActionTypes.ADD_RISK_AND_WIN,
  payload: { id, risk, toWin }
});
