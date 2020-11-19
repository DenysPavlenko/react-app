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
// Components
import Burger from 'components/burger/burger';
import Image from 'components/image/image';
// Assets
import cupIcon from 'assets/images/icons/cup.png'
import timerIcn from 'assets/images/icons/timer.png'
import cardsIcn from 'assets/images/icons/cards.png'
import horseIcn from 'assets/images/icons/horse.png'
import scoresIcn from 'assets/images/icons/scores.png'
import calendarIcn from 'assets/images/icons/calendar.png'
// Styles
import './header-menu.sass';

const menu = [
  { name: 'Sports', rootName: '/sports', icon: cupIcon, alt: "sports" },
  { name: 'Live', rootName: '/live', icon: timerIcn, alt: "live" },
  { name: 'Casino', rootName: '/casino', icon: cardsIcn, alt: "casino" },
  { name: 'Horses', rootName: '/horses', icon: horseIcn, alt: "horses" },
];

const HeaderMenu = ({ defaultColorScheme, className, toggleSportsPageSchedule, isScheduleActive, history: { location }, breakpoints, currentBreakpoint }) => {
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
    setIsMenuOpened(!isMenuOpened);
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
      <div className="header-menu__button">
        <span className="header-menu__text">Scores</span>
        <Image src={scoresIcn} className="header-menu__icon" alt="nav-icon" icon />
      </div>
      {(location.pathname === '/sports' && isMobile) &&
        <div className={`header-menu__button ${isScheduleActive ? 'is-active ' : ''}`} onClick={toggleSportsPageSchedule}>
          <span className="header-menu__text">Schedule</span>
          <Image src={calendarIcn} className="header-menu__icon" alt="nav-icon" icon />
        </div>
      }
    </div>
  );
};

HeaderMenu.propTypes = {
  defaultColorScheme: PropTypes.string,
  className: PropTypes.string,
  toggleSportsPageSchedule: PropTypes.func,
  history: PropTypes.object,
  isScheduleActive: PropTypes.bool,
  breakpoints: PropTypes.object,
  currentBreakpoint: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  defaultColorScheme: selectColorScheme,
  isScheduleActive: selectSportsPageSchedule
});

const mapDispatchToProps = dispatch => ({
  toggleSportsPageSchedule: () => dispatch(toggleSportsPageSchedule())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withBreakpoints(HeaderMenu)));
