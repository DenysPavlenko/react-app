import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
// Styles
import './sidebar-item.sass';

const SidebarItem = ({ isActive, toggle, children }) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    return () => !isActive && setIsClicked(false);
  }, [isActive]);

  const handleClick = () => {
    !isClicked && toggle();
    setIsClicked(true);
  };

  return (
    <>
      <CSSTransition in={isActive} unmountOnExit timeout={300} classNames="sidebar-item-overlay-animation">
        <div className="sidebar-item__overlay" onClick={handleClick}></div>
      </CSSTransition>
      <CSSTransition in={isActive} unmountOnExit timeout={300} classNames="sidebar-item-content-animation">
        <div className="sidebar-item__content">
          {children}
        </div>
      </CSSTransition>
    </>
  );
};

SidebarItem.propTypes = {
  isActive: PropTypes.bool,
  toggle: PropTypes.func,
  children: PropTypes.node,
};

export default SidebarItem;
