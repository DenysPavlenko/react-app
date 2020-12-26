import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';

const tableContent = handleDelete => {
  return [
    {
      title: 'Name',
      render: data => <Typography component="p">{data.name}</Typography>
    },
    {
      title: 'Title',
      render: data => <Typography component="p">{data.title} {data.teamName}</Typography>
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
  ];
};

export default tableContent;
