import React from 'react';
import PropTypes from 'prop-types';
// Components
import Typography from 'components/typography/typography';
// Styles
import './sports-table-header-b.sass';

const SportsTableHeaderB = ({ day, spread, moneyLine, total, teamTotal, breakpoints, currentBreakpoint, spreadType, totalType }) => {
  return (
    <thead className="sports-table-header-b">
      <tr>
        <th>
          <div>
            <Typography component="span" variant="h6" className="mb-0">{day}</Typography>
            <Typography component="span" variant="h6" className="mb-0">MAX:</Typography>
          </div>
        </th>
        {totalType !== 'team total' &&
          <th>
            <Typography component="span" variant="h6" className="mb-0">
              ${!spreadType ? `${spread}` : `${spreadType === 'spread' ? `${spread}` : `${moneyLine}`}`}
            </Typography>
          </th>
        }
        {!spreadType &&
          <th>
            {moneyLine && <Typography component="span" variant="h6" className="mb-0">${moneyLine}</Typography>}
          </th>
        }
        <th style={{ width: totalType === 'team total' ? '50%' : null }}>
          <Typography component="span" variant="h6" className="mb-0">
            ${!totalType ? `${total}` : `${totalType === 'total' ? `${total}` : `${teamTotal}`}`}
          </Typography>
        </th>
        {!totalType &&
          <th>
            {teamTotal && <Typography component="span" variant="h6" className="mb-0">${teamTotal}</Typography>}
          </th>
        }
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
