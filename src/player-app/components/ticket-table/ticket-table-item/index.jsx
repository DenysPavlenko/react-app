import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Components
import Typography from 'shared/components/typography';
// Styles
import './styles.sass';

const TicketTableItem = ({ id, type, stake, toWin, result, created, isActive, className, onClick }) => {
  const classes = classNames({
    'ticket-table-item': true,
    'is-active': isActive,
    [className]: className,
  });

  return (
    <tr className={classes} onClick={onClick}>
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
          <Typography component="p" variant="p-sm" className={`text-uppercase ${result.toLowerCase() === 'loss' ? 'text-danger' : 'text-accent'}`}>{result}</Typography>
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
  id: PropTypes.string,
  type: PropTypes.string,
  stake: PropTypes.string,
  toWin: PropTypes.string,
  result: PropTypes.string,
  created: PropTypes.string,
  isActive: PropTypes.bool,
  className: PropTypes.string,
};

export default TicketTableItem;
