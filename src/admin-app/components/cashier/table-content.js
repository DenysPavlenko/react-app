import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';
import Select from 'shared/components/select/select';
import Button from 'shared/components/button/button';
import ActionIcon from 'shared/components/action-icon/action-icon';
import RowGroup from 'shared/components/row-group/row-group';

const tableContent = (selects, handleSelect, handleDeleteClick) => {
  const colWidth = 100 / 7 + '%';

  return [
    {
      style: { width: colWidth },
      title: 'Delete',
      render: ({ id }) => <ActionIcon icon="trash" color="danger" onClick={() => handleDeleteClick(id)} />
    },
    {
      style: { width: colWidth },
      title: 'User ID',
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
      title: 'Balance',
      render: ({ balance }) => <Typography component="p">{balance}</Typography>
    },
    {
      style: { width: colWidth },
      title: 'trans type',
      render: ({ id }) => (
        <RowGroup>
          <Select
            value={selects[id].transType}
            onChange={(e) => { handleSelect(id, e) }}
            variant="primary"
            name="transType"
            size="sm"
            style={{ minWidth: '110px' }}
            options={[
              { label: 'Deposit', value: 'deposit' },
              { label: 'Withdrawal', value: 'withdrawal' },
            ]}
          />
          <Button variant="accent" size="xxs">CB</Button>
        </RowGroup>
      )
    },
    {
      style: { width: colWidth },
      title: 'New Balance',
      render: () => <Typography component="p">0</Typography>
    },
  ];
};

export default tableContent;
