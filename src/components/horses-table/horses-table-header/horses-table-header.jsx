import React from 'react';
// Components
import Typography from 'components/typography/typography';
// Styles
import './horses-table-header.sass';

const HorsesTableHeader = () => {
  return (
    <thead className="horses-table-header">
      <tr>
        <th>
          <Typography component="p">Win</Typography>
        </th>
        <th>
          <Typography component="p">Place</Typography>
        </th>
        <th>
          <Typography component="p">Show</Typography>
        </th>
        <th>
          <Typography component="p">PN</Typography>
        </th>
        <th>
          <Typography component="p">Runner / Jockey</Typography>
        </th>
        <th>
          <Typography component="p">Trainer</Typography>
        </th>
        <th>
          <Typography component="p">Weight</Typography>
        </th>
        <th>
          <Typography component="p">Price</Typography>
        </th>
        <th>
          <Typography component="p">Med.</Typography>
        </th>
        <th>
          <Typography component="p">M/L</Typography>
        </th>
      </tr>
    </thead>
  );
};

export default HorsesTableHeader;
