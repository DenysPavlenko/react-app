import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';
import Input from 'shared/components/input/input';
import Select from 'shared/components/select/select';
import Close from 'shared/components/close/close';
import Button from 'shared/components/button/button';

const tableContent = (inputs, handleInput) => {
  const colWidth = 100 / 11 + '%';

  return [
    {
      style: { width: colWidth },
      title: 'Delete',
      render: () => <Close size="sm" />
    },
    {
      style: { width: colWidth },
      title: 'user id',
      render: ({ id }) => <Typography component="p">{id}</Typography>
    },
    {
      style: { width: colWidth },
      title: 'name',
      render: ({ name }) => <Typography component="p">{name}</Typography>
    },
    {
      style: { width: colWidth },
      title: 'password',
      render: ({ password }) => <Typography component="p">{password}</Typography>
    },
    {
      style: { width: colWidth },
      title: 'settle',
      render: ({ settle }) => <Typography component="p">{settle}</Typography>
    },
    {
      style: { width: colWidth },
      title: 'bow',
      render: ({ bow }) => <Typography component="p">{bow}</Typography>
    },
    {
      style: { width: colWidth },
      title: 'trans type',
      render: ({ id }) =>
        <Select
          value={inputs[id].transType}
          onChange={(e) => { handleInput(id, e) }}
          variant="primary"
          name="transType"
          size="sm"
          options={[
            { label: 'Deposit', value: 'deposit' },
            { label: 'Withdrawal', value: 'withdrawal' },
          ]}
        />
    },
    {
      style: { width: colWidth },
      title: 'description',
      render: ({ id }) => <Input value={inputs[id].description} name="description" onChange={(e) => handleInput(id, e)} variant="primary" size="sm" width="auto" />
    },
    {
      style: { width: colWidth },
      title: 'rating',
      render: ({ rating }) => <Typography component="p">{rating}</Typography>
    },
    {
      style: { width: colWidth },
      title: 'notes',
      render: ({ id }) => <Input value={inputs[id].notes} name="notes" onChange={(e) => handleInput(id, e)} variant="primary" size="sm" width="auto" />
    },
    {
      style: { width: colWidth },
      title: 'Save',
      render: () => <Button variant="accent" size="xxs">Save</Button>
    },
  ];
};

export default tableContent;
