import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';
import ActionIcon from 'shared/components/action-icon/action-icon';

const tableContent = handleAgentSelect => {
  const isOdd = idx => idx % 2 === 0;
  return [
    {
      render: ({ id }, idx) => isOdd(idx) ? <ActionIcon icon="search" onClick={() => handleAgentSelect(id)} /> : null
    },
    {
      render: ({ date, time }, idx) => <Typography component="p">{isOdd(idx) ? date : time}</Typography>
    },
    {
      render: ({ rotation }) => <Typography component="p">{rotation}</Typography>
    },
    {
      render: ({ game }) => <Typography component="p">{game}</Typography>
    },
    {
      render: ({ strPs1 }) => <Typography component="p">{strPs1}</Typography>
    },
    {
      render: ({ strPs2 }) => <Typography component="p">{strPs2}</Typography>
    },
    {
      render: ({ strMl1 }) => <Typography component="p">{strMl1}</Typography>
    },
    {
      render: ({ strMl2 }) => <Typography component="p">{strMl2}</Typography>
    },
    {
      render: ({ strTot1 }) => <Typography component="p">{strTot1}</Typography>
    },
    {
      render: ({ strTot2 }) => <Typography component="p">{strTot2}</Typography>
    },
    {
      render: ({ strTto }) => <Typography component="p">{strTto}</Typography>
    },
    {
      render: ({ strTto2 }) => <Typography component="p">{strTto2}</Typography>
    },
    {
      render: ({ strTtu1 }) => <Typography component="p">{strTtu1}</Typography>
    },
    {
      render: ({ strTtu2 }) => <Typography component="p">{strTtu2}</Typography>
    },
    {
      render: ({ parPs }) => <Typography component="p">{parPs}</Typography>
    },
    {
      render: ({ parMl }) => <Typography component="p">{parMl}</Typography>
    },
    {
      render: ({ parTot }) => <Typography component="p">{parTot}</Typography>
    },
    {
      render: ({ teasPs }) => <Typography component="p">{teasPs}</Typography>
    },
    {
      render: ({ teasTot }) => <Typography component="p">{teasTot}</Typography>
    },
  ];
};

export default tableContent;
