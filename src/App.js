import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
// Components
import ScrollToTop from 'components/scroll-to-top/scroll-to-top';
import Header from 'components/header/header';
// Pages
import SignInPage from 'pages/sign-in-page/sign-in-page';
import SportsPage from 'pages/sports-page/sports-page';

const App = () => {
  return (
    <div className="app">
      <Header />
      <ScrollToTop>
        <Switch>
          <SignInPage exact path="/sign-in"/>
          <SportsPage exact path="/sports" />
        </Switch>
      </ScrollToTop>
    </div>
  );
};

export default withRouter(App);
