import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withBreakpoints } from 'react-breakpoints';
import { connect } from 'react-redux';
// Redux
import { toggleSideMenu } from 'redux/side-menu/actions';
import { toggleScores } from 'redux/scores/actions';
import { toggleMail } from 'redux/mail/actions';
import { togglePersonalize } from 'redux/personalize/actions';
import { showSettings } from 'redux/settings/actions';
// Components
import HeaderMenu from './header-menu';
import Balance from 'parts/balance';
import HeaderDropdown from './header-dropdown';
import HeaderDropdownMenu from './header-dropdown-menu';
// Assets
import homeIcon from 'assets/images/icons/home.png';
import dollarIcn from 'assets/images/icons/dollar.png';
import distributionIcn from 'assets/images/icons/distribution.png';
import positionIcn from 'assets/images/icons/pin.png';
// Styles
import './styles.sass';

const Header = ({ breakpoints, currentBreakpoint, toggleSideMenu, toggleScores, toggleMail, togglePersonalize, showSettings }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (breakpoints[currentBreakpoint] < breakpoints.xl) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [breakpoints, currentBreakpoint]);

  const menu = [
    { name: 'home', rootName: '/', icon: homeIcon, alt: 'home' },
    { name: 'figures', rootName: '/figures', icon: dollarIcn, alt: 'figures' },
    { name: 'distribution', rootName: '/distribution', icon: distributionIcn, alt: 'distribution' },
    { name: 'position', rootName: '/position', icon: positionIcn, alt: 'position' },
  ];

  const dropdownMenu = [
    { icon: 'calendar', title: 'Scores', handler: toggleScores },
    { icon: 'envelope', title: 'Mail', handler: toggleMail },
    { icon: 'cog', title: 'Settings', handler: showSettings },
    { icon: 'paint-brush', title: 'Personalize it', handler: togglePersonalize },
    { icon: 'power-off', title: 'Sign out', rootName: '/sign-in' },
  ];

  return (
    <Fragment>
      <div className="header-gap"></div>
      <div className="header">
        <div className="header__menu">
          <HeaderMenu burger={toggleSideMenu} menu={menu} />
        </div>
        <div className="header__content">
          <Balance />
        </div>
        <div className="header__user">
          <HeaderDropdown closeOnClick={!isMobile}>
            <HeaderDropdownMenu menu={dropdownMenu} footer={<Balance vertical />} />
          </HeaderDropdown>
        </div>
      </div>
    </Fragment>
  );
};

Header.propTypes = {
  breakpoints: PropTypes.object,
  currentBreakpoint: PropTypes.string,
  toggleSideMenu: PropTypes.func,
  toggleScores: PropTypes.func,
  toggleMail: PropTypes.func,
  togglePersonalize: PropTypes.func,
  showSettings: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  toggleSideMenu: () => dispatch(toggleSideMenu()),
  toggleScores: () => dispatch(toggleScores()),
  toggleMail: () => dispatch(toggleMail()),
  togglePersonalize: () => dispatch(togglePersonalize()),
  showSettings: () => dispatch(showSettings()),
});

export default connect(null, mapDispatchToProps)(withBreakpoints(Header));
