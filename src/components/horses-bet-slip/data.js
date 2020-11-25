const createData = (id, type, info, details, bets, amount, total) => ({ id, type, info, details, bets, amount, total });

const data = [
  createData('1', 'exacta', 'Charles Town, Nov 25, Race #1', '1st[1, 2] - 2nd[1, 2]', '2', '1.00', '2'),
  createData('2', 'trifecta', 'Charles Town, Nov 25, Race #1', '1st[1, 2, 3] - 2nd[1, 2, 3] - 3rd[1, 2, 3]', '6', '1.00', '6')
];

export default data;
