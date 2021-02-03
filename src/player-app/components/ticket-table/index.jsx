import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Components
import Typography from 'shared/components/typography';
import Table from 'shared/components/table';
import TicketTableHeader from './ticket-table-header';
import TicketTableItems from './ticket-table-items';
import TicketTableDetails from './ticket-table-details';
// Styles
import './styles.sass';

const TicketTable = ({ title, info, info: { data }, retry }) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className="ticket-table">
      <Typography component="h1" className="ticket-table__heading text-uppercase">{title}</Typography>
      <div className="ticket-table__wrap">
        <Table>
          <tbody>
            <tr className="ticket-table__row">
              <td className="ticket-table__left">
                <Table>
                  <TicketTableHeader />
                  <TicketTableItems retry={retry} activeItem={activeItem} handleItem={setActiveItem} {...info} />
                </Table>
              </td>
              <td className="ticket-table__right">
                <TicketTableDetails data={data && data[activeItem].details} />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

TicketTable.propTypes = {
  title: PropTypes.string,
  data: PropTypes.object,
};

export default TicketTable;
