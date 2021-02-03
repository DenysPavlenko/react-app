import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
// Styles
import './styles.sass';

const SidebarItem = ({ isActive, toggle, left, size, children }) => {
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

  const classes = classNames({
    'sidebar-item': true,
    'sidebar-item--left': left,
    [`sidebar-item--${size}`]: size,
  });

  return (
    <div className={classes}>
      <CSSTransition nodeRef={overlayRef} in={isActive} unmountOnExit timeout={300} classNames="sidebar-item-overlay-animation">
        <div ref={overlayRef} className="sidebar-item__overlay" onClick={handleClick}></div>
      </CSSTransition>
      <CSSTransition nodeRef={contentRef} in={isActive} unmountOnExit timeout={300} classNames="sidebar-item-content-animation">
        <div ref={contentRef} className="sidebar-item__content">
          {children}
        </div>
      </CSSTransition>
    </div>
  );
};

SidebarItem.propTypes = {
  isActive: PropTypes.bool,
  toggle: PropTypes.func,
  children: PropTypes.node,
};

export default SidebarItem;
