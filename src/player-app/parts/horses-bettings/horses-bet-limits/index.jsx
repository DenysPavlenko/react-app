import React from 'react';
import PropTypes from 'prop-types';
// Components
import Typography from 'shared/components/typography';
import Table from 'shared/components/table';
// Styles
import './styles.sass';

const HorsesBetLimits = ({ showDetails, title, min, max }) => {
  return (
    <div className="horses-bet-limits">
      <Typography component="h3" className="horses-bet-limits__title">{title} Limits (USD)</Typography>
      <Table className="horses-bet-limits__table">
        <thead>
          <tr>
            {showDetails && <th></th>}
            <th>Min</th>
            <th>Max</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {showDetails && <td><Typography component="p">Win</Typography></td>}
            <td>
              <Typography component="p">{min}</Typography>
            </td>
            <td>
              <Typography component="p">{max}</Typography>
            </td>
          </tr>
          {showDetails &&
            <tr>
              <td>
                <Typography component="p">Place</Typography>
              </td>
              <td>
                <Typography component="p">{min}</Typography>
              </td>
              <td>
                <Typography component="p">{max}</Typography>
              </td>
            </tr>
          }
          {showDetails &&
            <tr>
              <td>
                <Typography component="p">Show</Typography></td>
              <td>
                <Typography component="p">{min}</Typography>
              </td>
              <td>
                <Typography component="p">{max}</Typography>
              </td>
            </tr>
          }
        </tbody>
      </Table>
    </div>
  );
};

HorsesBetLimits.propTypes = {
  showDetails: PropTypes.bool,
  title: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
};

export default HorsesBetLimits;
