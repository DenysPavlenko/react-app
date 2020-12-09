import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';
import RowGroup from 'shared/components/row-group/row-group';
import Button from 'shared/components/button/button';

const tableConstants = handleDelete => {
  return [
    {
      title: 'Name',
      render: rowData => {
        return <Typography component="p">{rowData.name}</Typography>
      },
    },
    {
      title: 'Title',
      render: rowData => {
        return <Typography component="p">{rowData.title}</Typography>
      },
    },
    {
      title: 'Risk',
      render: rowData => {
        return (
          <RowGroup noWrap size="sm">
            <Typography component="p">{rowData.risk}</Typography>
            <Button size="xxs" variant="danger" onClick={() => handleDelete(rowData.id)}>Delete</Button>
          </RowGroup>
        )
      },
    },
    {
      title: 'Sport',
      render: rowData => {
        return <Typography component="p">{rowData.sport}</Typography>
      },
    },
    {
      title: 'Selection',
      render: rowData => {
        return <Typography component="p">{rowData.selection}</Typography>
      },
    },
    {
      title: 'Accepted',
      render: rowData => {
        return <Typography component="p">{rowData.accepted}</Typography>
      },
    },
    {
      title: 'Scheduled',
      render: rowData => {
        return <Typography component="p">{rowData.scheduled}</Typography>
      },
    },
    {
      title: 'Ticket number',
      render: rowData => {
        return <Typography component="p">{rowData.ticketNumber}</Typography>
      },
    },
    {
      title: 'Outcome',
      render: rowData => {
        return <Typography component="p">{rowData.outcome}</Typography>
      },
    },
  ];
};

export default tableConstants
