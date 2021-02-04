import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import { withBreakpoints } from 'react-breakpoints';
// Components
import Burger from 'components/burger';
import Image from 'components/image';
import HeaderMenuItems from '../header-menu-items';
// Styles
import './styles.sass';

const HeaderMenu = ({ burger, menu, button, className, togglers, location, breakpoints, currentBreakpoint }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (breakpoints[currentBreakpoint] < breakpoints.xl) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [breakpoints, currentBreakpoint]);

  const classes = classNames({
    'header-menu': true,
    [className]: className
  });

  return (
    <div className={classes}>
      <div className="header-menu__toggler" onClick={burger}>
        <Burger />
      </div>
      {(isMobile && togglers) &&
        togglers.map(({ pathname, icon, isActive, handler }, idx) => (
          <Fragment key={idx}>
            {location.pathname === pathname &&
              <div className={`header-menu__toggler ${isActive ? 'is-active ' : ''}`} onClick={handler}>
                <Image src={icon} className="header-menu__toggler-icon" alt="nav-icon" icon />
              </div>
            }
          </Fragment>
        ))
      }
      {button ?
        <div className="header-menu__button">{button}</div>
        :
        <div className="header-menu__items">
          <HeaderMenuItems menu={menu} />
        </div>
      }
    </div>
  );
};

HeaderMenu.propTypes = {
  burger: PropTypes.func,
  location: PropTypes.object,
  togglers: PropTypes.array,
  breakpoints: PropTypes.object,
  currentBreakpoint: PropTypes.string,
  className: PropTypes.string,
  button: PropTypes.node,
  menu: PropTypes.array,
};

export default withRouter(withBreakpoints(HeaderMenu));
