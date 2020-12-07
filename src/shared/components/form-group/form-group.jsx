import React from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types';
// Styles
import './form-group.sass';

const FormGroup = ({ children, className }) => {
  const classes = classNames({
    'form-group': true,
    [className]: className
  });

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default FormGroup;
