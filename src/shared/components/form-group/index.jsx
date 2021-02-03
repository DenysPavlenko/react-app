import React from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types';
// Styles
import './styles.sass';

const FormGroup = ({ children, label, vertical, errorMsg, className }) => {
  const classes = classNames({
    'form-group': true,
    'form-group--vertical': vertical,
    [className]: className
  });

  return (
    <div className={classes}>
      {label && <label className="form-group__label">{label}</label>}
      {children}
      {errorMsg && <span className="form-group__error">{errorMsg}</span>}
    </div>
  );
};

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default FormGroup;
