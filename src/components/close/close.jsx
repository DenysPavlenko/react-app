import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './close.sass';

const Close = ({ className, ...otherProps }) => {
  const classes = classNames({
    'close': true,
    [className]: className,
  });

  return (
    <FontAwesomeIcon icon="times" className={classes} {...otherProps} />
  );
};

Close.propTypes = {
  className: PropTypes.string,
};

export default Close;
