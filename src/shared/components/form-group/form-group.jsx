import React from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types';
// Styles
import './form-group.sass';

const FormGroup = ({ children, label, vertical, className }) => {
  const classes = classNames({
    'form-group': true,
    'form-group--vertical': vertical,
    [className]: className
  });

  return (
    <div className={classes}>
      {label && <label className="form-group__label">{label}</label>}
      {children}
    </div>
  );
};

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default FormGroup;
