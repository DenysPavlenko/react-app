import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Components
import Button from 'shared/components/button/button';
// Styles
import './tab.sass';

const Tab = ({ isActive, children, onClick, className }) => {
  const classes = classNames({
    'tab': true,
    'is-active': isActive,
    [className]: className
  });

  return (
    <Button className={classes} standard={false} onClick={onClick}>{children}</Button>
  );
};

Tab.propTypes = {
  children: PropTypes.node,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Tab;
