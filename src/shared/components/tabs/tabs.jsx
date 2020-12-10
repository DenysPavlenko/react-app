import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './tabs.sass';

const Tabs = ({ children, responsive, className }) => {
  const classes = classNames({
    'tabs': true,
    'tabs--responsive': responsive,
    [className]: className
  });

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Tabs;
