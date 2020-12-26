import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';

const tableContent = () => {
  return [
    {
      title: 'Description',
      render: ({ description }) => <Typography component="p">{description}</Typography>
    },
    {
      title: 'Result',
      render: ({ result }) => <Typography component="p">{result}</Typography>
    },
  ];
};

export default tableContent;
