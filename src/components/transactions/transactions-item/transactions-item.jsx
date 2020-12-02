import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Components
import Typography from 'components/typography/typography';
// Styles
import './transactions-item.sass';

const TransactionsItem = ({ date, type, amount, balance, className }) => {

  const classes = classNames({
    'transactions-item': true,
    [className]: className,
  });

  const amountColor = (+amount < 0 && 'text-danger') || (+amount > 0 && 'text-accent') || '';
  const balanceColor = (+balance < 0 && 'text-danger') || (+balance > 0 && 'text-accent') || '';

  return (
    <tr className={classes}>
      <td>
        <Typography component="p" variant="p-sm" className="text-alt-gray">{date}</Typography>
        <Typography component="p">{type}</Typography>
      </td>
      <td>
        <Typography component="p" className={amountColor}>{amount && `$${amount}`}</Typography>
      </td>
      <td>
        <Typography component="p" className={balanceColor}>${balance}</Typography>
      </td>
    </tr>
  );
};

TransactionsItem.propTypes = {
  date: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  balance: PropTypes.string,
  className: PropTypes.string,
};

export default TransactionsItem;
