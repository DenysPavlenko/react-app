import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'shared/redux/color-scheme/selectors';
// Components
import Typography from 'shared/components/typography/typography';
// Styles
import './transactions-header.sass';

const TransactionsHeader = ({ colorScheme }) => {
  const classes = classNames({
    'transactions-header': true,
    [`theme-${colorScheme}`]: colorScheme,
  });

  return (
    <thead className={classes}>
      <tr>
        <th>
          <Typography component="h5">Transaction</Typography>
        </th>
        <th>
          <Typography component="h5">Amount</Typography>
        </th>
        <th>
          <Typography component="h5">Balance</Typography>
        </th>
      </tr>
    </thead>
  );
};

TransactionsHeader.propTypes = {
  colorScheme: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  colorScheme: selectColorScheme,
});

export default connect(mapStateToProps)(TransactionsHeader);
