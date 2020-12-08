import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import './form.sass';

const Form = ({ children, className, ...otherProps }) => {
  const classes = classNames({
    'form': true,
    [className]: className
  });

  return (
    <form className={classes} {...otherProps}>
      {children}
    </form>
  );
};


Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Form;
