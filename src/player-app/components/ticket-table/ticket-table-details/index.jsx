import React from 'react';
import PropTypes from 'prop-types';
// Components
import Table from 'shared/components/table';
import Typography from 'shared/components/typography';
// Styles
import './styles.sass';

const TicketTableDetails = ({ data }) => {
  const { id, title, loss, score, team1, team2, wlast, wpick, wprice } = data || {};

  return (
    <Table className="ticket-table-details">
      <thead className="ticket-table-details__header">
        <tr>
          <th>
            <Typography component="h5" className="text-uppercase">TICKET CONTENT</Typography>
          </th>
        </tr>
      </thead>
      <tbody className="ticket-table-details__body">
        {data &&
          <tr>
            <td>
              <div className="ticket-table-details__title">
                <Typography component="p" variant="p-sm">{title}</Typography>
              </div>
              <div className="ticket-table-details__teams">
                <Typography component="p" variant="p-sm">{team1} @ {team2}</Typography>
              </div>
              <div className="ticket-table-details__total">
                <Typography component="p" variant="p-sm">Game lines:</Typography>
              </div>
              <div className="ticket-table-details__boxes">
                <div className="ticket-table-details__box">
                  <Typography component="h5">{wpick}</Typography>
                </div>
                <div className="ticket-table-details__box">
                  <Typography component="h5">{wprice}</Typography>
                </div>
              </div>
              <div className="ticket-table-details__boxes">
                <div className="ticket-table-details__box">
                  <Typography component="h5">#{id}</Typography>
                </div>
                <div className="ticket-table-details__box">
                  <Typography component="h5">{loss}</Typography>
                </div>
                <div className="ticket-table-details__box">
                  <Typography component="h5">{score}</Typography>
                </div>
                <div className="ticket-table-details__box">
                  <Typography component="h5">{wlast}</Typography>
                </div>
              </div>
            </td>
          </tr>
        }
      </tbody>
    </Table>
  );
};

TicketTableDetails.propTypes = {
  data: PropTypes.object,
};

export default TicketTableDetails;
