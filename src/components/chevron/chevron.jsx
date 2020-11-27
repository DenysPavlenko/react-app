import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './chevron.sass';

const Chevron = ({ className, isActive, ...otherProps }) => {
  const classes = classNames({
    'chevron': true,
    'is-active': isActive,
    [className]: className,
  });

  return (
    <FontAwesomeIcon icon="chevron-down" className={classes} {...otherProps} />
  );
};

Chevron.propTypes = {
  className: PropTypes.string,
};

export default Chevron;
