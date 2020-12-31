import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withBreakpoints } from 'react-breakpoints';
import { connect } from 'react-redux';
// Redux
import { togglePersonalize } from 'shared/redux/personalize/actions';
import { toggleMail } from 'shared/redux/mail/actions';
import { showSettings } from 'shared/redux/settings/actions';
import { toggleAdminMenu } from 'admin-app/redux/admin-menu/actions';
// Components
import Header from 'shared/components/header/header';
import HeaderMenu from 'shared/components/header-menu/header-menu';
import Balance from 'admin-app/components/balance/balance';
import Search from 'shared/components/search/search';
import SelectAgent from 'admin-app/components/select-agent/select-agent';
import HeaderDropdown from 'shared/components/header-dropdown/header-dropdown';
import HeaderDropdownMenu from 'shared/components/header-dropdown-menu/header-dropdown-menu';
// Assets
import homeIcon from 'shared/assets/images/icons/home.png';
import dollarIcn from 'shared/assets/images/icons/dollar.png';
import distributionIcn from 'shared/assets/images/icons/distribution.png';
import positionIcn from 'shared/assets/images/icons/pin.png';
// Styles
import './admin-header.sass';

const AdminHeader = ({ breakpoints, currentBreakpoint, toggleMail, showSettings, togglePersonalize, toggleAdminMenu }) => {
  const [isMobile, setIsMobile] = useState(false);

  const menu = [
    { name: 'home', rootName: '/', icon: homeIcon, alt: "home" },
    { name: 'figures', rootName: '/figures', icon: dollarIcn, alt: "figures" },
    { name: 'distribution', rootName: '/distribution', icon: distributionIcn, alt: "distribution" },
    { name: 'position', rootName: '/position', icon: positionIcn, alt: "position" },
  ];

  const dropdownMenu = [
    { icon: 'envelope', title: 'Mail', handler: toggleMail },
    { icon: 'cog', title: 'Settings', handler: showSettings },
    { icon: 'paint-brush', title: 'Personalize it', handler: togglePersonalize },
    { icon: 'power-off', title: 'Sign out', rootName: '/sign-in' },
  ];

  useEffect(() => {
    if (breakpoints[currentBreakpoint] < breakpoints.xl) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [breakpoints, currentBreakpoint]);

  return (
    <Header
      menu={<HeaderMenu burger={toggleAdminMenu} menu={menu} />}
      content={!isMobile && <Widgets />}
      dropdown={
        <HeaderDropdown closeOnClick={!isMobile}>
          <HeaderDropdownMenu menu={dropdownMenu} footer={<Widgets />} />
        </HeaderDropdown>
      }
    />
  );
};

const Widgets = () => {
  return (
    <div className="header-widgets">
      <div className="header-widgets__widget">
        <Search onSubmit={() => { }} variant="light" />
      </div>
      <div className="header-widgets__widget">
        <SelectAgent />
      </div>
      <div className="header-widgets__widget">
        <Balance />
      </div>
    </div>
  )
};

AdminHeader.propTypes = {
  breakpoints: PropTypes.object,
  currentBreakpoint: PropTypes.string,
  toggleMail: PropTypes.func,
  showSettings: PropTypes.func,
  togglePersonalize: PropTypes.func,
  toggleAdminMenu: PropTypes.func,
  balance: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  toggleMail: () => dispatch(toggleMail()),
  showSettings: () => dispatch(showSettings()),
  togglePersonalize: () => dispatch(togglePersonalize()),
  toggleAdminMenu: () => dispatch(toggleAdminMenu()),
});

export default connect(null, mapDispatchToProps)(withBreakpoints(AdminHeader));
