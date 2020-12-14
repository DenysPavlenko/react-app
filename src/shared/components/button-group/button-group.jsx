import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './button-group.sass';

const ButtonGroup = ({ children, separated, className }) => {
  const classes = classNames({
    'button-group': true,
    'button-group--joined': !separated,
    'button-group--separated': separated,
    [className]: className
  });

  return (
    <div className={classes}>
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
