import React from 'react';
// Components
import Typography from 'shared/components/typography';
import Checkbox from 'shared/components/checkbox';

const accountAccess = (handleInput, clientData) => ([
  {
    title: 'Account Access:',
    render: ({ title }) => <Typography component="p">{title}</Typography>
  },
  {
    title: 'Call Center',
    render: ({ callCenter }) => callCenter &&
      <Checkbox onChange={handleInput} name={callCenter.name} checked={clientData[callCenter.name]} />
  },
  {
    title: 'Internet',
    render: ({ internet }) => internet &&
      <Checkbox onChange={handleInput} name={internet.name} checked={clientData[internet.name]} />
  },
  {
    title: '',
    render: () => { }
  },
]);

const accountAccessData = [
  { title: 'Sport', callCenter: { name: 'sportCallAccess' }, internet: { name: 'sportInternetAccess' } },
  { title: 'Live Sport', callCenter: { name: 'liveSportCallAccess' }, internet: { name: 'liveSportInternetAccess' } },
  { title: 'Horses', callCenter: { name: 'horsesCallAccess' }, internet: { name: 'horsesInternetAccess' } },
  { title: 'Casino', callCenter: { name: 'casinoCallAccess' }, internet: { name: 'casinoInternetAccess' } },
];


export { accountAccess, accountAccessData };
