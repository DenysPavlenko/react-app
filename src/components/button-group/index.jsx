import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './styles.sass';

const ButtonGroup = ({ children, separated, responsive, nowrap, className, ...otherProps }) => {
  const classes = classNames({
    'button-group': true,
    'button-group--joined': !separated,
    'button-group--separated': separated,
    'button-group--responsive': responsive,
    'button-group--nowrap': nowrap,
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
  nowrap: PropTypes.bool,
}

export default ButtonGroup;
