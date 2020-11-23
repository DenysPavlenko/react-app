import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import './spinner.sass';

const Spinner = ({ light }) => {
  const classes = classNames({
    'spinner': true,
    'spinner--light': light,
  });

  return (
    <div className={classes}>
      <div className="spinner__inner">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

Spinner.propTypes = {
  light: PropTypes.bool,
};

export default Spinner;
