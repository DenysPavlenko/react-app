import React from 'react';
// Components
import Typography from 'components/typography/typography';
// Styles
import './sports-table-sub-header.sass';

const SportsTableSubHeader = () => {
  return (
    <thead className="sports-table-sub-header">
      <tr>
        <th>
          <div>
            <Typography component="span" variant="h6" className="mb-0 text-uppercase">THURSDAY 11/19</Typography>
            <Typography component="span" variant="h6" className="mb-0 text-uppercase">MAX:</Typography>
          </div>
        </th>
        <th>
          <Typography component="span" variant="h6" className="mb-0 text-uppercase text-center">$50,000</Typography>
        </th>
        <th>
          <Typography component="span" variant="h6" className="mb-0 text-uppercase">$20,000</Typography>
        </th>
        <th>
          <Typography component="span" variant="h6" className="mb-0 text-uppercase">$20,000</Typography>
        </th>
        <th>
          <Typography component="span" variant="h6" className="mb-0 text-uppercase">$5,000</Typography>
        </th>
      </tr>
    </thead>
  );
};

export default SportsTableSubHeader;
