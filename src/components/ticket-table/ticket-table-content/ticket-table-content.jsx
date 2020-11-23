import React from 'react';
// Components
import Table from 'components/table/table';
import Typography from 'components/typography/typography';
// Styles
import './ticket-table-content.sass';

const TicketTableContent = () => {
  return (
    <Table className="ticket-table-content">
      <thead className="ticket-table-content__header">
        <tr>
          <th>
            <Typography component="h5" className="text-uppercase">TICKET CONTENT</Typography>
          </th>
        </tr>
      </thead>
      <tbody className="ticket-table-content__body">
        <tr>
          <td>
            <div className="ticket-table-content__title">
              <Typography component="p" variant="p-sm">AMERICAN FOOTBALL - NFL NO Saints @ TB Buccaneers</Typography>
            </div>
            <div className="ticket-table-content__total">
              <Typography component="p" variant="p-sm">TB Buccaneers Totals</Typography>
            </div>
            <div className="ticket-table-content__boxes">
              <div className="ticket-table-content__box">
                <Typography component="h5">Over • 13.5</Typography>
              </div>
              <div className="ticket-table-content__box">
                <Typography component="h5">-120</Typography>
              </div>
            </div>
            <div className="ticket-table-content__boxes">
              <div className="ticket-table-content__box">
                <Typography component="h5">#27885588</Typography>
              </div>
              <div className="ticket-table-content__box">
                <Typography component="h5">L</Typography>
              </div>
              <div className="ticket-table-content__box">
                <Typography component="h5">31--0Q3</Typography>
              </div>
              <div className="ticket-table-content__box">
                <Typography component="h5">15:00</Typography>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TicketTableContent;
