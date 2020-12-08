import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import Typography from 'shared/components/typography/typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './customer-list-item.sass';

const CustomerListItem = ({ data, className }) => {
  const classes = classNames({
    'customer-list-item': true,
    [className]: className,
  });

  return (
    <tr className={classes}>
      {Object.keys(data).map((key, idx) => {
        const value = data[key];
        return (
          <td key={idx}>
            {typeof value === 'boolean' ?
              <FontAwesomeIcon
                icon={value ? 'check' : 'times'}
                className={`customer-list-item__icon ${value ? 'text-accent' : 'text-danger'}`}
              />
              :
              <Typography component="p">{value}</Typography>
            }
          </td>
        )
      })}
    </tr>
  );
};

CustomerListItem.propTypes = {
  data: PropTypes.object,
  className: PropTypes.string,
};

export default CustomerListItem;
