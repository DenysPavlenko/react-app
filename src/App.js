import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
// Components
import ScrollToTop from 'components/scroll-to-top/scroll-to-top';
import Header from 'components/header/header';
import Personalize from 'components/personalize/personalize';
import Scores from 'components/scores/scores';
// Pages
import SignInPage from 'pages/sign-in-page/sign-in-page';
import SportsPage from 'pages/sports-page/sports-page';
import LivePage from 'pages/live-page/live-page';
import CasinoPage from 'pages/casino-page/casino-page';
import HorsesPage from 'pages/horses-page/horses-page';
import RulesPage from 'pages/rules-page/rules-page';
// Styles
import './app.sass';

// Font awesome icons
library.add(fas);

const App = ({ location }) => {
  return (
    <div className="app">
      <Personalize />
      <Scores />
      <div className="app__background" />
      {(location.pathname !== '/sign-in') && <Header />}
      <div className={`${location.pathname !== '/sign-in' ? 'app__content' : ''}`}>
        <ScrollToTop>
          <Switch>
            <Route path="/sign-in" exact component={SignInPage} />
            <Route path="/sports" exact component={SportsPage} />
            <Route path="/live" component={LivePage} />
            <Route path="/casino" exact component={CasinoPage} />
            <Route path="/horses" exact component={HorsesPage} />
            <Route path="/rules" exact component={RulesPage} />
            <Redirect to="/rules" />
          </Switch>
        </ScrollToTop>
      </div>
    </div>
  );
};

export default withRouter(App);
