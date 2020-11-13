import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import './input.sass';

const Input = ({ className, ...otherProps }) => {
  const classes = classNames({
    'input': true,
    [className]: className
  });

  return (
    <input className={classes} {...otherProps} />
  );
};

Input.propTypes = {
  className: PropTypes.string,
};

export default Input;
