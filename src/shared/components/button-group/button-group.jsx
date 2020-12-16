import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './button-group.sass';

const ButtonGroup = ({ children, separated, responsive, className, ...otherProps }) => {
  const classes = classNames({
    'button-group': true,
    'button-group--joined': !separated,
    'button-group--separated': separated,
    'button-group--responsive': responsive,
    [className]: className
  });

  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  separated: PropTypes.bool,
}

export default ButtonGroup;
