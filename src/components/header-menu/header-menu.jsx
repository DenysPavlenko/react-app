import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'redux/color-scheme/selectors';
// Components
import Burger from 'components/burger/burger';
import Image from 'components/image/image';
// Assets
import cupIcon from 'assets/images/icons/cup.png'
import timerIcn from 'assets/images/icons/timer.png'
import cardsIcn from 'assets/images/icons/cards.png'
import horseIcn from 'assets/images/icons/horse.png'
import scoresIcn from 'assets/images/icons/scores.png'
// Styles
import './header-menu.sass';

const menu = [
  { name: 'Sports', rootName: '/sports', icon: cupIcon, alt: "sports" },
  { name: 'Live', rootName: '/live', icon: timerIcn, alt: "live" },
  { name: 'Casino', rootName: '/casino', icon: cardsIcn, alt: "casino" },
  { name: 'Horses', rootName: '/horses', icon: horseIcn, alt: "horses" },
];

const HeaderMenu = ({ defaultColorScheme, className }) => {
  const [scoresActive, toggleScoresActive] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const classes = classNames({
    'header-menu': true,
    [`header-menu--${defaultColorScheme}`]: defaultColorScheme,
    [className]: className
  });

  const handleScoresClick = () => {
    toggleScoresActive(!scoresActive);
  };

  const handleToggleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

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
      <div className={`header-menu__scores ${scoresActive ? 'is-active' : ''}`} onClick={handleScoresClick}>
        <span className="header-menu__text">Scores</span>
        <Image src={scoresIcn} className="header-menu__icon" alt="nav-icon" icon />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  defaultColorScheme: selectColorScheme
});

HeaderMenu.propTypes = {
  defaultColorScheme: PropTypes.string,
  className: PropTypes.string,
};

export default connect(mapStateToProps)(HeaderMenu);
