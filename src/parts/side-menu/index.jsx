import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { toggleSideMenu } from 'redux/side-menu/actions';
import { selectSideMenu } from 'redux/side-menu/selectors';
import { selectColorSchemes } from 'redux/color-scheme/selectors';
// Components
import SidebarItem from 'components/sidebar-item';
import Typography from 'components/typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Simplebar from 'simplebar-react';
import Close from 'components/close';
// Styles
import './styles.sass';

const items = [
  { title: 'Customer List', rootName: '/customer-list', icon: 'address-book' },
  { title: 'Pending', rootName: '/pending', icon: 'hourglass-half' },
  { title: 'Settle', rootName: '/settle', icon: 'check' },
  { title: 'Agents', rootName: '/agents', icon: 'user-friends' },
  { title: 'Cashier', rootName: '/cashier', icon: 'money-bill-wave' },
  { title: 'New Accounts', rootName: '/new-accounts', icon: 'user-plus' },
  { title: 'Deleted Wagers', rootName: '/deleted-wagers', icon: 'trash' },
];

const SideMenu = ({ isActive, toggleSideMenu }) => {
  return (
    <SidebarItem isActive={isActive} toggle={toggleSideMenu} left size="sm">
      <div className="side-menu">
        <div className="side-menu__close">
          <Close onClick={toggleSideMenu} />
        </div>
        <div className="side-menu__items">
          <Simplebar className="custom-scroll">
            {items.map(({ title, rootName, icon }, idx) => (
              <NavLink key={idx} to={rootName} exact={true} className="side-menu__item" onClick={toggleSideMenu}>
                <div className="side-menu__item-icon-wrap">
                  <FontAwesomeIcon className="side-menu__item-icon" icon={icon} />
                </div>
                <Typography component="h5" className="side-menu__item-title">{title}</Typography>
              </NavLink>
            ))}
          </Simplebar>
        </div>
      </div>
    </SidebarItem>
  );
};

SideMenu.propTypes = {
  isActive: PropTypes.bool,
  toggleSideMenu: PropTypes.func,
  colorSchemes: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  isActive: selectSideMenu,
  colorSchemes: selectColorSchemes
});

const mapDispatchToProps = dispatch => ({
  toggleSideMenu: () => dispatch(toggleSideMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SideMenu));
