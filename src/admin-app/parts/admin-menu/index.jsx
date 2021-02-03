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
import SidebarItem from 'shared/components/sidebar-item';
import Typography from 'shared/components/typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Simplebar from 'simplebar-react';
import Close from 'shared/components/close';
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
                <div className="admin-menu__item-icon-wrap">
                  <FontAwesomeIcon className="admin-menu__item-icon" icon={icon} />
                </div>
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
