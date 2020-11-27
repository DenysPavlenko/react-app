import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import './spinner.sass';

const Spinner = ({ light, boxed }) => {
  const classes = classNames({
    'spinner': true,
    'spinner--light': light,
  });

  return (
    <WithBox boxed={boxed}>
      <div className={classes}>
        <div className="spinner__inner">
          <div></div>
          <div></div>
        </div>
      </div>
    </WithBox>
  );
};

const WithBox = ({ children, boxed }) => (
  <>
    {boxed ?
      <div className="spinner-box">{children}</div>
      :
      children
    }
  </>
);

Spinner.propTypes = {
  light: PropTypes.bool,
};

export default Spinner;
