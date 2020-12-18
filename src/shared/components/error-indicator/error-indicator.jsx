import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import Typography from 'shared/components/typography/typography';
import Button from 'shared/components/button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './error-indicator.sass';
// Assets

const ErrorIndicator = ({ className, light, retry }) => {
  const classes = classNames({
    'error-indicator': true,
    [className]: className
  });

  return (
    <div className={classes}>
      <FontAwesomeIcon className="error-indicator__icon" icon="exclamation-triangle" />
      <Typography component="h4" className={`${light ? 'text-light' : 'text-dark'}`}>BOOM!</Typography>
      <Typography component="p" className={`${light ? 'text-light' : 'text-dark'}`}> Something has gone terribly wrong</Typography>
      {retry && <Button className="error-indicator__button" variant="accent-blue" size="sm" onClick={retry}>Retry</Button>}
    </div>
  );
};

ErrorIndicator.propTypes = {
  className: PropTypes.string,
  light: PropTypes.bool,
  retry: PropTypes.func,
};

export default ErrorIndicator;
