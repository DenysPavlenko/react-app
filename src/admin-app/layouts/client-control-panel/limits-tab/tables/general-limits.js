import React from 'react';
// Components
import Typography from 'shared/components/typography';
import Input from 'shared/components/input';

const generalLimitsTable = (handleInput, clientData) => ([
  {
    title: 'General Limit',
    render: data => <Typography component="p">{data.title}</Typography>
  },
  {
    title: 'Min:',
    render: ({ min }) => <Input name={min} value={clientData[min]} onChange={handleInput} size="sm" variant="primary" width="auto" style={{ display: 'inline-block' }} />
  },
  {
    title: 'Max:',
    render: ({ max }) => <Input name={max} value={clientData[max]} onChange={handleInput} size="sm" variant="primary" width="auto" style={{ display: 'inline-block' }} />
  },
  {
    title: 'Per Game:',
    render: ({ perGame }) => <Input name={perGame} value={clientData[perGame]} onChange={handleInput} size="sm" variant="primary" width="auto" style={{ display: 'inline-block' }} />
  },
]);

const generalLimitsTableData = [
  { title: 'All:', min: 'allGenlLimMin', max: 'allGenlLimMax', factor: 'allGenlLimFactor', perGame: 'allGenlLimPerGame' },
  { title: 'Straight:', min: 'straightGenLimMin', max: 'straightGenLimMax', factor: 'straightGenLimFactor', perGame: 'straightGenLimPerGame' },
  { title: 'Live Sports:', min: 'liveSportsGenLimMin', max: 'liveSportsGenLimMax', factor: 'liveSportsGenLimFactor', perGame: 'liveSportsGenLimPerGame' },
  { title: 'Parlay:', min: 'parlayGenLimMin', max: 'parlayGenLimMax', factor: 'parlayGenLimFactor', perGame: 'parlayGenLimPerGame' },
  { title: 'Teaser:', min: 'teaserGenLimMin', max: 'teaserGenLimMax', factor: 'teaserGenLimFactor', perGame: 'teaserGenLimPerGame' },
  { title: 'IfBet:', min: 'IfBetGenLimMin', max: 'IfBetGenLimMax', factor: 'IfBetGenLimFactor', perGame: 'IfBetGenLimPerGame' },
  { title: 'Horses:', min: 'HorsesGenLimMin', max: 'HorsesGenLimMax', factor: 'HorsesGenLimFactor', perGame: 'HorsesGenLimPerGame' },
];

export { generalLimitsTable, generalLimitsTableData };
