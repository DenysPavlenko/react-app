import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './button-group.sass';

const ButtonGroup = ({ children, className }) => {
  const classes = classNames({
    'button-group': true,
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
}

export default ButtonGroup;
