import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
// Components
import Typography from 'components/typography/typography';
// Styles
import './sports-table-header-a.sass';

const SportsTableHeaderA = ({ toggleSpreadType, spreadType, toggleTotalType, totalType }) => {
  return (
    <thead className="sports-table-header-a">
      <tr>
        <th></th>
        {totalType !== 'team total' &&
          <th>
            {!spreadType && <Typography component="span" variant="h5">Spread</Typography>}
            {spreadType &&
              <div className="sports-table-header-a__item" onClick={toggleSpreadType}>
                <Typography component="span" variant="h5">{spreadType || 'Spread'}</Typography>
                <FontAwesomeIcon className="sports-table-header-a__icon" icon="sort" />
              </div>
            }
          </th>
        }
        {!spreadType &&
          <th>
            <Typography component="span" variant="h5">moneyline</Typography>
          </th>
        }
        <th>
          {!totalType && <Typography component="span" variant="h5">Total</Typography>}
          {totalType &&
            <div className="sports-table-header-a__item" onClick={toggleTotalType}>
              <Typography component="span" variant="h5">{totalType || 'Total'}</Typography>
              <FontAwesomeIcon className="sports-table-header-a__icon" icon="sort" />
            </div>
          }
        </th>
        {!totalType &&
          <th>
            <Typography component="span" variant="h5">team total</Typography>
          </th>
        }
      </tr>
    </thead>
  );
};

SportsTableHeaderA.propTypes = {
  toggleSpreadType: PropTypes.func,
  spreadType: PropTypes.string,
  toggleTotalType: PropTypes.func,
  totalType: PropTypes.string,
};

export default SportsTableHeaderA;
