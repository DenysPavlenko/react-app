import React, { useState, useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { withBreakpoints } from 'react-breakpoints';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchBalanceData } from 'admin-app/redux/balance/actions';
import { selectBalance } from 'admin-app/redux/balance/selectors';
import { togglePersonalize } from 'shared/redux/personalize/actions';
import { toggleMail } from 'shared/redux/mail/actions';
import { showSettings } from 'shared/redux/settings/actions';
import { toggleAdminMenu } from 'admin-app/redux/admin-menu/actions';
// Components
import Header from 'shared/components/header/header';
import HeaderMenu from 'shared/components/header-menu/header-menu';
import BalanceItem from 'shared/components/balance-item/balance-item';
import Search from 'shared/components/search/search';
import Select from 'shared/components/select/select';
import HeaderDropdown from 'shared/components/header-dropdown/header-dropdown';
import HeaderDropdownMenu from 'shared/components/header-dropdown-menu/header-dropdown-menu';
// Assets
import homeIcon from 'shared/assets/images/icons/home.png';
import dollarIcn from 'shared/assets/images/icons/dollar.png';
import distributionIcn from 'shared/assets/images/icons/distribution.png';
import positionIcn from 'shared/assets/images/icons/pin.png';
// Styles
import './admin-header.sass';

const menu = [
  { name: 'home', rootName: '/', icon: homeIcon, alt: "home" },
  { name: 'figures', rootName: '/figures', icon: dollarIcn, alt: "figures" },
  { name: 'distribution', rootName: '/distribution', icon: distributionIcn, alt: "distribution" },
  { name: 'position', rootName: '/position', icon: positionIcn, alt: "position" },
];

const AdminHeader = ({ breakpoints, currentBreakpoint, toggleMail, showSettings, togglePersonalize, toggleAdminMenu, fetchBalanceData, balance }) => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    fetchBalanceData();
  }, [fetchBalanceData])

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
      sideMenu={toggleAdminMenu}
      menu={<HeaderMenu menu={menu} />}
      content={!isMobile && <Widgets balance={balance} />}
      dropdown={
        <HeaderDropdown name="PA47">
          <HeaderDropdownMenu menu={dropdownMenu} footer={<Widgets />} />
        </HeaderDropdown>
      }
    />
  );
};

const Widgets = ({ balance: { loading, data, error } }) => {
  return (
    <div className="header-widgets">
      <div className="header-widgets__widget">
        <Search onChange={() => { }} radius />
      </div>
      <div className="header-widgets__widget">
        <Select
          onChange={() => { }}
          options={[
            { label: 'ztma', value: 'ztma' },
            { label: 'ztma1', value: 'ztma1' },
            { label: 'ztma2', value: 'ztma2' },
          ]}
        />
      </div>
      <div className="header-widgets__widget">
        <BalanceItem title="balance" total={data && data.balance} loading={loading} error={error} />
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
  fetchBalanceData: PropTypes.func,
  balance: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  balance: selectBalance
});

const mapDispatchToProps = dispatch => ({
  fetchBalanceData: () => dispatch(fetchBalanceData()),
  toggleMail: () => dispatch(toggleMail()),
  showSettings: () => dispatch(showSettings()),
  togglePersonalize: () => dispatch(togglePersonalize()),
  toggleAdminMenu: () => dispatch(toggleAdminMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withBreakpoints(AdminHeader));
