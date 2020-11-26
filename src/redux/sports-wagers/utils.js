export const toggleWager = (wagers, wager) => {
  const wagerExists = wagers.some(({ id }) => id === wager.id);
  if (wagerExists) {
    return wagers.filter(({ id }) => id !== wager.id);
  } else {
    return [...wagers, wager];
  }
};
