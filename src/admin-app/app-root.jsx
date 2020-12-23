import React, { Fragment, useLayoutEffect } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { connect } from 'react-redux';
// Redux
import { fetchUserData } from 'shared/redux/user/actions';
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
import PendingPage from 'admin-app/pages/pending-page/pending-page';
import SettlePage from 'admin-app/pages/settle-page/settle-page';
import ClientControlPanelPage from 'admin-app/pages/client-control-panel-page/client-control-panel-page';
import FiguresPage from 'admin-app/pages/figures-page/figures-page';
import DistributionPage from 'admin-app/pages/distribution-page/distribution-page';
import PositionPage from 'admin-app/pages/position-page/position-page';
import AgentsPage from 'admin-app/pages/agents-page/agents-page';
import CashierPage from 'admin-app/pages/cashier-page/cashier-page';
import NewAccountsPage from 'admin-app/pages/new-accounts-page/new-accounts-page';
import DeletedWagersPage from 'admin-app/pages/deleted-wagers-page/deleted-wagers-page';
// Styles
import './app-root.sass';

// Font awesome icons
library.add(fas);

const AppRoot = ({ fetchUserData, location }) => {

  useLayoutEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return (
    <div className="app-root">
      {(location.pathname !== '/sign-in') &&
        <Fragment>
          <AdminHeader />
          <AdminSettings />
          <AdminMenu />
          <Mail />
          <Personalize />
        </Fragment>
      }
      <div className={`${location.pathname !== '/sign-in' ? 'app-root__content' : ''}`}>
        <ScrollToTop>
          <Switch>
            <Route path="/sign-in" exact component={SignInPage} />
            <Route path="/" exact component={HomePage} />
            <Route path="/customer-list" exact component={CustomerListPage} />
            <Route path="/pending" exact component={PendingPage} />
            <Route path="/settle" exact component={SettlePage} />
            <Route path="/client-control-panel/:clientId" exact component={ClientControlPanelPage} />
            <Route path="/figures" exact component={FiguresPage} />
            <Route path="/distribution" exact component={DistributionPage} />
            <Route path="/position" exact component={PositionPage} />
            <Route path="/agents" exact component={AgentsPage} />
            <Route path="/cashier" exact component={CashierPage} />
            <Route path="/new-accounts" exact component={NewAccountsPage} />
            <Route path="/deleted-wagers" exact component={DeletedWagersPage} />
            <Redirect to="/" />
          </Switch>
        </ScrollToTop>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchUserData: () => dispatch(fetchUserData())
});

export default connect(null, mapDispatchToProps)(withRouter(AppRoot));
