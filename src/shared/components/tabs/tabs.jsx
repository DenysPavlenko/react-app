import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './tabs.sass';

const Tabs = ({ children, className }) => {
  const classes = classNames({
    'tabs': true,
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
