import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';
import ActionIcon from 'shared/components/action-icon/action-icon';

const tableContent = handleDelete => {
  return [
    {
      title: 'Name',
      render: data => <Typography component="p">{data.name}</Typography>
    },
    {
      style: { width: '20%', minWidth: '280px', whiteSpace: 'normal' },
      title: 'Title',
      render: data => <Typography component="p"> {data.title} {data.teamName}</Typography >
    },
    {
      title: 'Sport',
      render: data => <Typography component="p">{data.sport}</Typography>
    },
    {
      title: 'Selection',
      render: data => <Typography component="p">{data.selection}</Typography>
    },
    {
      title: 'Accepted',
      render: data => <Typography component="p">{data.accepted}</Typography>
    },
    {
      title: 'Scheduled',
      render: data => <Typography component="p">{data.scheduled}</Typography>
    },
    {
      title: 'Ticket number',
      render: data => <Typography component="p">{data.ticketNumber}</Typography>
    },
    {
      title: 'Outcome',
      render: data => <Typography component="p">{data.outcome}</Typography>
    },
    {
      title: 'Risk/Win',
      render: data => <Typography component="p">{data.risk}</Typography>
    },
    {
      title: 'Delete',
      render: data => <ActionIcon icon="trash" color="danger" onClick={() => handleDelete(data.id)} />
    },
  ];
};

export default tableContent;
