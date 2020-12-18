import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';
// Utils
import setDangerClass from 'shared/utils/set-danger-class';

const tableContent = () => {
  return [
    {
      title: 'Date',
      render: data => <Typography component="p">{data.date}</Typography>
    },
    {
      title: 'Rotation',
      render: data => <Typography component="p">{data.rotation}</Typography>
    },
    {
      title: 'Game',
      render: data => <Typography component="p">{data.game}</Typography>
    },
    {
      title: 'Straight',
      render: data => <Typography component="p" className = { setDangerClass() }>{data.straight}</Typography>
    },
    {
      title: 'Parlay',
      render: data => <Typography component="p" className = { setDangerClass() }>{data.parlay}</Typography>
    },
    {
      title: 'Teaser',
      render: data => <Typography component="p" className = { setDangerClass() }>{data.teaser}</Typography>
    },
  ];
};

export default tableContent;
