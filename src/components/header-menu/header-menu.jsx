import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { withBreakpoints } from 'react-breakpoints';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'redux/color-scheme/selectors';
import { selectSportsPageSchedule } from 'redux/sports-page-schedule/selectors';
import { toggleSportsPageSchedule } from 'redux/sports-page-schedule/actions';
import { selectLivePlayProgram } from 'redux/live-play-program/selectors';
import { toggleLivePlayProgram } from 'redux/live-play-program/actions';
// Components
import Burger from 'components/burger/burger';
import Image from 'components/image/image';
// Assets
import cupIcon from 'assets/images/icons/cup.png'
import timerIcn from 'assets/images/icons/timer.png'
import cardsIcn from 'assets/images/icons/cards.png'
import horseIcn from 'assets/images/icons/horse.png'
import calendarIcn from 'assets/images/icons/calendar.png'
import programIcn from 'assets/images/icons/list.png'
// Styles
import './header-menu.sass';

const menu = [
  { name: 'Sports', rootName: '/sports', icon: cupIcon, alt: "sports" },
  { name: 'Live', rootName: '/live', icon: timerIcn, alt: "live" },
  { name: 'Casino', rootName: '/casino', icon: cardsIcn, alt: "casino" },
  { name: 'Horses', rootName: '/horses', icon: horseIcn, alt: "horses" },
];

const HeaderMenu = ({ defaultColorScheme, className, toggleSportsPageSchedule, isScheduleShown, location, breakpoints, currentBreakpoint, isProgramShown, toggleLivePlayProgram }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (breakpoints[currentBreakpoint] < breakpoints.lg) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [breakpoints, currentBreakpoint]);

  const handleToggleMenu = () => {
    isMobile && setIsMenuOpened(!isMenuOpened);
  };

  const classes = classNames({
    'header-menu': true,
    [`header-menu--${defaultColorScheme}`]: defaultColorScheme,
    [className]: className
  });

  return (
    <div className={classes}>
      <div className="header-menu__burger">
        <Burger onClick={handleToggleMenu} />
      </div>
      <div className={`header-menu__wrap ${isMenuOpened ? 'is-active' : ''}`}>
        <div className="header-menu__items">
          {menu.map(({ name, rootName, icon }, idx) => (
            <NavLink key={idx} to={rootName} exact={rootName === '/' && true} className="header-menu__item" onClick={handleToggleMenu}>
              <span className="header-menu__text">{name}</span>
              <Image src={icon} className="header-menu__icon" alt="nav-icon" icon />
            </NavLink>
          ))}
        </div>
      </div>
      {(location.pathname === '/sports' && isMobile) &&
        <div className={`header-menu__button ${isScheduleShown ? 'is-active ' : ''}`} onClick={toggleSportsPageSchedule}>
          <span className="header-menu__text">Schedule</span>
          <Image src={calendarIcn} className="header-menu__icon" alt="nav-icon" icon />
        </div>
      }
      {(location.pathname === '/live' && isMobile) &&
        <div className={`header-menu__button ${isProgramShown ? 'is-active ' : ''}`} onClick={toggleLivePlayProgram}>
          <span className="header-menu__text">Program</span>
          <Image src={programIcn} className="header-menu__icon" alt="nav-icon" icon />
        </div>
      }
    </div>
  );
};

HeaderMenu.propTypes = {
  defaultColorScheme: PropTypes.string,
  className: PropTypes.string,
  toggleSportsPageSchedule: PropTypes.func,
  isScheduleShown: PropTypes.bool,
  toggleLivePlayProgram: PropTypes.func,
  isProgramShown: PropTypes.bool,
  location: PropTypes.object,
  breakpoints: PropTypes.object,
  currentBreakpoint: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  defaultColorScheme: selectColorScheme,
  isScheduleShown: selectSportsPageSchedule,
  isProgramShown: selectLivePlayProgram,
});

const mapDispatchToProps = dispatch => ({
  toggleSportsPageSchedule: () => dispatch(toggleSportsPageSchedule()),
  toggleLivePlayProgram: () => dispatch(toggleLivePlayProgram()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withBreakpoints(HeaderMenu)));
