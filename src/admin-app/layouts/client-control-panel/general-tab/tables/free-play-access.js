import React from 'react';
// Components
import Typography from 'shared/components/typography';
import Checkbox from 'shared/components/checkbox';

const freePlayAccess = (handleInput, clientData) => ([
  {
    title: 'Free Play Access:',
    render: ({ title }) => <Typography component="p">{title}</Typography>
  },
  {
    title: '',
    render: () => { }
  },
  {
    title: 'Access',
    render: ({ access }) => <Checkbox onChange={handleInput} name={access.name} checked={clientData[access.name]} />
  },
  {
    title: '',
    render: () => { }
  },
]);

const freePlayAccessData = [
  { title: 'Straight - Games', access: { name: 'straightGamesFreePlayAcc' } },
  { title: 'Straight - Contests', access: { name: 'straightContestsFreePlayAcc' } },
  { title: 'Parlay', access: { name: 'parlayFreePlayAcc' } },
  { title: 'Teaser', access: { name: 'teaserFreePlayAcc' } },
];

export { freePlayAccess, freePlayAccessData };
