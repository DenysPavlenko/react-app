import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
// Components
import ScrollToTop from 'components/scroll-to-top/scroll-to-top';
import Header from 'components/header/header';
// Pages
import SignInPage from 'pages/sign-in-page/sign-in-page';
import SportsPage from 'pages/sports-page/sports-page';
import LivePage from 'pages/live-page/live-page';
import CasinoPage from 'pages/casino-page/casino-page';
import HorsesPage from 'pages/horses-page/horses-page';
import ScoresPage from 'pages/scores-page/scores-page';
// Styles
import './app.sass';
// Assets
import texasAtm from 'assets/images/backgrounds/texas-atm.jpg';

const App = ({ location }) => {
  return (
    <div className="app">
      <div className="app__background" style={{ backgroundImage: `url(${texasAtm})` }} />
      {(location.pathname !== '/sign-in') && <Header />}
      <ScrollToTop>
        <Switch>
          <Route path="/sign-in" exact component={SignInPage} />
          <Route path="/sports" exact component={SportsPage} />
          <Route path="/live" exact component={LivePage} />
          <Route path="/casino" exact component={CasinoPage} />
          <Route path="/horses" exact component={HorsesPage} />
          <Route path="/scores" exact component={ScoresPage} />
          <Redirect to="/sports" />
        </Switch>
      </ScrollToTop>
    </div>
  );
};

export default withRouter(App);
