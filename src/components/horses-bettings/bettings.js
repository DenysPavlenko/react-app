const createBet = (id, runner, jockey, trainer, weight, price, med, ml) => {
  return { id, runner, jockey, trainer, weight, price, med, ml, bets: [id + 1, id + 2, id + 3, id + 4] }
}

const bettings = [
  createBet('1', 'Luke the Drifter', 'J. Journet', 'C.Guidry', '120', '5,000', 'L', '30-1'),
  createBet('2', 'Mogowan', 'J. Stokes ', 'S. Delany', '123', '5,000', 'L', '9-2'),
  createBet('3', 'Egomaniac', 'J. Dominguez', 'B. Huval', '120', '5,000', 'L', '6-1'),
  createBet('4', 'Racin Rocks', 'J. Guerrero', 'P. Turner', '120', '5,000', 'L', '30-1'),
  createBet('5', 'Son of Patriot', 'A. Quiles', 'D. Jackson', '120', '5,000', 'L', '30-1'),
];

export default bettings;
