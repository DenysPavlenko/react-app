import React from 'react';
import PropTypes from 'prop-types';
// Components
import Typography from 'components/typography/typography';
// Styles
import './sports-table-header-b.sass';

const SportsTableHeaderB = ({ day, spread, moneyLine, total, teamTotal }) => {
  return (
    <thead className="sports-table-header-b">
      <tr>
        <th>
          <div>
            <Typography component="span" variant="h6" className="mb-0 text-uppercase">{day}</Typography>
            <Typography component="span" variant="h6" className="mb-0 text-uppercase">MAX:</Typography>
          </div>
        </th>
        <th>
          {spread && <Typography component="span" variant="h6" className="mb-0 text-uppercase text-center">${spread}</Typography>}
        </th>
        <th>
          {moneyLine && <Typography component="span" variant="h6" className="mb-0 text-uppercase text-center">${moneyLine}</Typography>}
        </th>
        <th>
          {total && <Typography component="span" variant="h6" className="mb-0 text-uppercase text-center">${total}</Typography>}
        </th>
        <th>
          {teamTotal && <Typography component="span" variant="h6" className="mb-0 text-uppercase text-center">${teamTotal}</Typography>}
        </th>
      </tr>
    </thead>
  );
};

SportsTableHeaderB.propTypes = {
  day: PropTypes.string,
  spread: PropTypes.string,
  moneyLine: PropTypes.string,
  total: PropTypes.string,
  teamTotal: PropTypes.string,
};

export default SportsTableHeaderB;
