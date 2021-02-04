import React from 'react';
// Components
import Typography from 'components/typography';
import Select from 'components/select';
import Button from 'components/button';
import ActionIcon from 'components/action-icon';
import RowGroup from 'components/row-group';
// Utils
import handleStatusClass from 'utils/handle-status-class';

const tableContent = ({ selects, handleSelect, handleDeleteClick, handleTransSummary }) => {
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
      render: ({ balance }) => <Typography component="p" className={handleStatusClass(balance)}>{balance}</Typography>
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
          <Button variant="accent" size="xxs" onClick={() => handleTransSummary(id)}>CB</Button>
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
