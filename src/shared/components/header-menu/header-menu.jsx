import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter, NavLink } from 'react-router-dom';
import { withBreakpoints } from 'react-breakpoints';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'shared/redux/color-scheme/selectors';
// Components
import Burger from 'shared/components/burger/burger';
import Image from 'shared/components/image/image';
// Styles
import './header-menu.sass';

const HeaderMenu = ({ menu, colorScheme, className, breakpoints, currentBreakpoint, mobileButtons, location }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (breakpoints[currentBreakpoint] < breakpoints.xl) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [breakpoints, currentBreakpoint]);

  const handleToggleMenu = () => isMobile && setIsMenuOpened(isMenuOpened => !isMenuOpened);

  const classes = classNames({
    'header-menu': true,
    [`theme-${colorScheme}`]: colorScheme,
    [className]: className
  });

  return (
    <div className={classes}>
      <div className="header-menu__burger">
        <Burger onClick={handleToggleMenu} />
      </div>
      <div className={`header-menu__wrap ${isMenuOpened ? 'is-active' : ''}`}>
        <div className="header-menu__items">
          {menu.map(({ name, rootName, handler, icon }, idx) => (
            <Fragment key={idx} >
              {handler &&
                <div onClick={() => { handler(); handleToggleMenu(); }} className="header-menu__item header-menu__item--sm">
                  <span className="header-menu__text">{name}</span>
                  <Image src={icon} className="header-menu__icon" alt="nav-icon" icon />
                </div>
              }
              {rootName &&
                <NavLink to={rootName} exact={rootName === '/' && true} className="header-menu__item" onClick={handleToggleMenu}>
                  <span className="header-menu__text">{name}</span>
                  <Image src={icon} className="header-menu__icon" alt="nav-icon" icon />
                </NavLink>
              }
            </Fragment>
          ))}
        </div>
      </div>
      {isMobile && mobileButtons && mobileButtons.map(({ pathname, title, icon, isActive, handler }, idx) => (
        <Fragment key={idx}>
          {location.pathname === pathname &&
            <div className={`header-menu__button ${isActive ? 'is-active ' : ''}`} onClick={handler}>
              <span className="header-menu__text">{title}</span>
              <Image src={icon} className="header-menu__icon" alt="nav-icon" icon />
            </div>
          }
        </Fragment>
      ))}
    </div>
  );
};

HeaderMenu.propTypes = {
  menu: PropTypes.array,
  colorScheme: PropTypes.string,
  className: PropTypes.string,
  breakpoints: PropTypes.object,
  currentBreakpoint: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  colorScheme: selectColorScheme,
});

export default connect(mapStateToProps)(withRouter(withBreakpoints(HeaderMenu)));
