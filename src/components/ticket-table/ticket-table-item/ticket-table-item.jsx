import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Components
import Typography from 'components/typography/typography';
// Styles
import './ticket-table-item.sass';

const TicketTableItem = ({ className, id, type, stake, toWin, result, created }) => {
  const classes = classNames({
    'ticket-table-item': true,
    [className]: className,
  });

  return (
    <tr className={classes}>
      <td>
        <div>
          <Typography component="p" variant="p-sm">#{id}</Typography>
        </div>
      </td>
      <td>
        <div>
          <Typography component="p" variant="p-sm">#{type}</Typography>
        </div>
      </td>
      <td>
        <div>
          <Typography component="p" variant="p-sm">{stake}</Typography>
        </div>
      </td>
      <td>
        <div>
          <Typography component="p" variant="p-sm">{toWin}</Typography>
        </div>
      </td>
      <td>
        <div>
          <Typography component="p" variant="p-sm" className="text-danger text-uppercase">{result}</Typography>
        </div>
      </td>
      <td>
        <div>
          <Typography component="p" variant="p-sm">{created}</Typography>
        </div>
      </td>
      <td>
        <div>
          <Typography component="p" variant="p-sm">Claims</Typography>
        </div>
      </td>
    </tr>
  );
};

TicketTableItem.propTypes = {
  className: PropTypes.string
};

export default TicketTableItem;
