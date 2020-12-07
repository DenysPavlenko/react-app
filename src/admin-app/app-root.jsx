import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
// Components
import ScrollToTop from 'shared/components/scroll-to-top/scroll-to-top';
import AdminMenu from 'admin-app/components/admin-menu/admin-menu';
import AdminHeader from 'admin-app/components/admin-header/admin-header';
import AdminSettings from 'admin-app/components/admin-settings/admin-settings';
import Personalize from 'shared/components/personalize/personalize';
import Mail from 'shared/components/mail/mail';
// Pages
import SignInPage from 'shared/pages/sign-in-page/sign-in-page';
import HomePage from 'admin-app/pages/home-page/home-page';
import CustomerListPage from 'admin-app/pages/customer-list-page/customer-list-page';
// Styles
import './app-root.sass';

// Font awesome icons
library.add(fas);

const AdminAppContainer = ({ location }) => {
  return (
    <div className="app-root">
      {(location.pathname !== '/sign-in') &&
        <>
          <AdminHeader />
          <AdminSettings />
          <AdminMenu />
          <Mail />
          <Personalize />
        </>
      }
      <div className={`${location.pathname !== '/sign-in' ? 'app-root__content' : ''}`}>
        <ScrollToTop>
          <Switch>
            <Route path="/sign-in" exact component={SignInPage} />
            <Route path="/" exact component={HomePage} />
            <Route path="/customer-list" exact component={CustomerListPage} />
            <Redirect to="/" />
          </Switch>
        </ScrollToTop>
      </div>
    </div>
  );
};

export default withRouter(AdminAppContainer);
