import React from 'react';
import PropTypes from 'prop-types';
// Components
import Typography from 'components/typography/typography';
import TicketTableItem from '../ticket-table-item/ticket-table-item';
import Spinner from 'components/spinner/spinner';
import ErrorIndicator from 'components/error-indicator/error-indicator';

const TicketTableItems = ({ loading, error, data, activeItem, handleItem, retry }) => {
  return (
    <tbody>
      { error &&
        <tr>
          <td className="ticket-table__indicator">
            <ErrorIndicator light retry={retry} />
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
          {data.map(({ id, ...otherProps }, idx) => (
            <TicketTableItem isActive={idx === activeItem} key={id} id={id} {...otherProps} className="ticket-table__item" onClick={() => handleItem(idx)} />
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

TicketTableItems.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  data: PropTypes.array,
  retry: PropTypes.func,
};

export default TicketTableItems;
