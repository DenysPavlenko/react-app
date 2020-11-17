import React from 'react';
// Components
import Typography from 'components/typography/typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './error-indicator.sass';
// Assets

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <FontAwesomeIcon className="error-indicator__icon" icon="exclamation-triangle"/>
      <Typography component="h4" className="text-dark">BOOM!</Typography>
      <Typography component="p" className="text-dark">Something has gone terribly wrong</Typography>
    </div>
  );
};

export default ErrorIndicator;
