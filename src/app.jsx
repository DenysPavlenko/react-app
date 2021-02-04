import React, { Fragment, useLayoutEffect } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { connect } from 'react-redux';
// Redux
import { fetchUserData } from 'redux/user/actions';
// Components
import ScrollToTop from 'components/scroll-to-top';
import Header from 'parts/header';
import SideMenu from 'parts/side-menu';
import Settings from 'parts/settings';
import Scores from 'parts/scores';
import Mail from 'parts/mail';
import Personalize from 'parts/personalize';
// Pages
import SignInPage from 'pages/sign-in-page';
import HomePage from 'pages/home-page';
import CustomerListPage from 'pages/customer-list-page';
import PendingPage from 'pages/pending-page';
import SettlePage from 'pages/settle-page';
import ClientControlPanelPage from 'pages/client-control-panel-page';
import FiguresPage from 'pages/figures-page';
import DistributionPage from 'pages/distribution-page';
import PositionPage from 'pages/position-page';
import AgentsPage from 'pages/agents-page';
import CashierPage from 'pages/cashier-page';
import NewAccountsPage from 'pages/new-accounts-page';
import DeletedWagersPage from 'pages/deleted-wagers-page';
import BalancePage from 'pages/balance-page';
// Styles
import './app.sass';

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
          <Header />
          <Settings />
          <SideMenu />
          <Scores />
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
            <Route path="/balance" exact component={BalancePage} />
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
