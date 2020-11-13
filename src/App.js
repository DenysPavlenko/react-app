import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
// Components
import ScrollToTop from 'components/scroll-to-top/scroll-to-top';
// Pages
import SignInPage from 'pages/sign-in-page/sign-in-page';
import SportsPage from 'pages/sports-page/sports-page';

const App = () => {
  return (
    <div className="app">
      <ScrollToTop>
        {/* <SignInPage /> */}
        <Switch>
          <SportsPage />
        </Switch>
      </ScrollToTop>
    </div>
  );
};

export default withRouter(App);
