import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './styles.sass';

const Close = ({ className, dark, size, ...otherProps }) => {
  const classes = classNames({
    'close': true,
    'close--dark': dark,
    [`close--${size}`]: size,
    [className]: className,
  });

  return (
    <FontAwesomeIcon icon="times" className={classes} {...otherProps} />
  );
};

Close.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  dark: PropTypes.bool,
};

export default Close;
