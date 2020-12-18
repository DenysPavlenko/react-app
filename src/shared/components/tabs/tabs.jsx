import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './tabs.sass';

const Tabs = ({ children, nowrap, className }) => {
  const classes = classNames({
    'tabs': true,
    'tabs--nowrap': nowrap,
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
