import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
// Styles
import './sidebar-item.sass';

const SidebarItem = ({ isActive, toggle, children }) => {
  const [isClicked, setIsClicked] = useState(false);
  const contentRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    return () => !isActive && setIsClicked(false);
  }, [isActive]);

  const handleClick = () => {
    !isClicked && toggle();
    setIsClicked(true);
  };

  return (
    <>
      <CSSTransition nodeRef={overlayRef} in={isActive} unmountOnExit timeout={300} classNames="sidebar-item-overlay-animation">
        <div ref={overlayRef} className="sidebar-item__overlay" onClick={handleClick}></div>
      </CSSTransition>
      <CSSTransition nodeRef={contentRef} in={isActive} unmountOnExit timeout={300} classNames="sidebar-item-content-animation">
        <div ref={contentRef} className="sidebar-item__content">
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
