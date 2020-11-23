import React from 'react';
import PropTypes from 'prop-types';
// Components
import Spinner from 'components/spinner/spinner';
import ErrorIndicator from 'components/error-indicator/error-indicator';
import Typography from 'components/typography/typography';
import Table from 'components/table/table';
import TicketTableHeader from './ticket-table-header/ticket-table-header';
import TicketTableItem from './ticket-table-item/ticket-table-item';
import TicketTableContent from './ticket-table-content/ticket-table-content';
// Styles
import './ticket-table.sass';

const TicketTable = ({ title, data }) => {
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
                  <TicketTableItemsContainer {...data} />
                </Table>
              </td>
              <td className="ticket-table__right">
                <TicketTableContent />
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

const TicketTableItemsContainer = ({ loading, error, data }) => {
  return (
    <tbody>
      { error &&
        <tr>
          <td className="ticket-table__indicator">
            <ErrorIndicator light />
          </td>
        </tr>
      }
      {
        (!error && loading) &&
        <tr>
          <td className="ticket-table__indicator">
            <Spinner light />
          </td>
        </tr>
      }
      {
        (!error && !loading) &&
        <>
          {data.map(({ id, ...otherProps }) => (
            <TicketTableItem key={id} id={id} {...otherProps} className="ticket-table__item" />
          ))}
        </>
      }
      {(!error && !loading && !data.length) &&
        <tr>
          <td className="ticket-table__indicator">
            <Typography component="h3" className="ticket-table__heading text-uppercase">There is no data</Typography>
          </td>
        </tr>
      }
    </tbody>
  )
}

TicketTableItemsContainer.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  data: PropTypes.array,
};

export default TicketTable;
