import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'redux/color-scheme/selectors';
// Components
import Typography from 'components/typography';
// Styles
import './styles.sass'

const PendingWagersHeader = ({ colorScheme }) => {
  const classes = classNames({
    'pending-wagers-header': true,
    [`theme-${colorScheme}`]: colorScheme,
  });

  return (
    <thead className={classes}>
      <tr>
        <th>
          <Typography component="h5">Accepted (PST)</Typography>
        </th>
        <th>
          <Typography component="h5">Description</Typography>
        </th>
        <th>
          <Typography component="h5">Risk</Typography>
        </th>
        <th>
          <Typography component="h5">To Win</Typography>
        </th>
      </tr>
    </thead>
  );
};

PendingWagersHeader.propTypes = {
  colorScheme: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  colorScheme: selectColorScheme,
});

export default connect(mapStateToProps)(PendingWagersHeader);
