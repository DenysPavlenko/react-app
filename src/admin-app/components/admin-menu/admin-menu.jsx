import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { toggleAdminMenu } from 'admin-app/redux/admin-menu/actions';
import { selectAdminMenu } from 'admin-app/redux/admin-menu/selectors';
import { selectColorSchemes } from 'shared/redux/color-scheme/selectors';
// Components
import SidebarItem from 'shared/components/sidebar-item/sidebar-item';
import Typography from 'shared/components/typography/typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Simplebar from 'simplebar-react';
import Close from 'shared/components/close/close';
// Styles
import './admin-menu.sass';

const items = [
  { title: 'Customer List', rootName: '/customer-list', icon: 'address-book' },
  { title: 'Pending', rootName: '/pending', icon: 'hourglass-half' },
  { title: 'Settle', rootName: '/settle', icon: 'check' },
  { title: 'Agents', rootName: '/Agents', icon: 'user-friends' },
  { title: 'Cashier', rootName: '/cashier', icon: 'user' },
  { title: 'New Accounts', rootName: 'new-accounts', icon: 'user' },
];

const AdminMenu = ({ isActive, toggleAdminMenu }) => {
  return (
    <SidebarItem isActive={isActive} toggle={toggleAdminMenu} left size="sm">
      <div className="admin-menu">
        <div className="admin-menu__close">
          <Close onClick={toggleAdminMenu} />
        </div>
        <div className="admin-menu__items">
          <Simplebar className="custom-scroll">
            {items.map(({ title, rootName, icon }, idx) => (
              <NavLink key={idx} to={rootName} exact={true} className="admin-menu__item" onClick={toggleAdminMenu}>
                <FontAwesomeIcon className="admin-menu__item-icon" icon={icon} />
                <Typography component="h5" className="admin-menu__item-title">{title}</Typography>
              </NavLink>
            ))}
          </Simplebar>
        </div>
      </div>
    </SidebarItem>
  );
};

AdminMenu.propTypes = {
  isActive: PropTypes.bool,
  toggleAdminMenu: PropTypes.func,
  colorSchemes: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  isActive: selectAdminMenu,
  colorSchemes: selectColorSchemes
});

const mapDispatchToProps = dispatch => ({
  toggleAdminMenu: () => dispatch(toggleAdminMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AdminMenu));
