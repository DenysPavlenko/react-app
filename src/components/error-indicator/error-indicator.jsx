import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import Typography from 'components/typography/typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './error-indicator.sass';
// Assets

const ErrorIndicator = ({ className }) => {
  const classes = classNames({
    'error-indicator': true,
    [className]: className
  });

  return (
    <div className={classes}>
      <FontAwesomeIcon className="error-indicator__icon" icon="exclamation-triangle" />
      <Typography component="h4" className="text-dark">BOOM!</Typography>
      <Typography component="p" className="text-dark">Something has gone terribly wrong</Typography>
    </div>
  );
};

ErrorIndicator.propTypes = {
  className: PropTypes.string,
};

export default ErrorIndicator;
