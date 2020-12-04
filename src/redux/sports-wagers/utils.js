export const toggleWager = (wagers, wager) => {
  const wagerExists = wagers.some(({ id }) => id === wager.id);
  if (wagerExists) {
    return wagers.filter(({ id }) => id !== wager.id);
  } else {
    return [...wagers, wager];
  }
};

export const addRiskAndWin = (wagers, { id, risk, toWin }) => {
  const wager = wagers.find((wager) => wager.id === id);
  const updatedWager = { ...wager, risk, toWin };
  return wagers.map((wager) => wager.id === id ? updatedWager : wager);
};
