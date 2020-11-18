import React from 'react';
// Components
import Typography from 'components/typography/typography';
// Styles
import './sports-table-header.sass';

const SportsTableHeader = () => {
  return (
    <thead className="sports-table-header">
      <tr>
        <th></th>
        <th>
          <Typography component="span" variant="h4" className="mb-0 text-uppercase">Spread</Typography>
        </th>
        <th>
          <Typography component="span" variant="h4" className="mb-0 text-uppercase">moneyline</Typography>
        </th>
        <th>
          <Typography component="span" variant="h4" className="mb-0 text-uppercase">total</Typography>
        </th>
        <th>
          <Typography component="span" variant="h4" className="mb-0 text-uppercase">team total</Typography>
        </th>
      </tr>
    </thead>
  );
};

export default SportsTableHeader;
