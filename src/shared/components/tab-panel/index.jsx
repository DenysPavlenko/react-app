import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './styles.sass';

const TabPanel = ({ children, className }) => {
  const classes = classNames({
    'tab-panel': true,
    [className]: className
  });

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default TabPanel;
