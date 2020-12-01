import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'redux/color-scheme/selectors';
// Components
import Typography from 'components/typography/typography';
// Styles
import './pending-wagers-header.sass'

const PendingWagersHeader = ({ defaultColorScheme }) => {
  const classes = classNames({
    'pending-wagers-header': true,
    [`theme-${defaultColorScheme}`]: defaultColorScheme,
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
  defaultColorScheme: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  defaultColorScheme: selectColorScheme,
});

export default connect(mapStateToProps)(PendingWagersHeader);
