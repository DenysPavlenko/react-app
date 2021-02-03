import React from 'react';
// Components
import Typography from 'shared/components/typography';
// Styles
import './styles.sass';

const TicketTableHeader = () => {
  return (
    <thead className="ticket-table-header">
      <tr>
        <th>
          <Typography component="h5" className="text-uppercase">id</Typography>
        </th>
        <th>
          <Typography component="h5" className="text-uppercase">type</Typography>
        </th>
        <th>
          <Typography component="h5" className="text-uppercase">stake</Typography>
        </th>
        <th>
          <Typography component="h5" className="text-uppercase">to win</Typography>
        </th>
        <th>
          <Typography component="h5" className="text-uppercase">result</Typography>
        </th>
        <th>
          <Typography component="h5" className="text-uppercase">created</Typography>
        </th>
        <th>
          <Typography component="h5" className="text-uppercase">wrong?</Typography>
        </th>
      </tr>
    </thead>
  );
};

export default TicketTableHeader;
