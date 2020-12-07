import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
// Components
import ScrollToTop from 'shared/components/scroll-to-top/scroll-to-top';
import UserHeader from 'player-app/components/user-header/user-header';
import Personalize from 'shared/components/personalize/personalize';
import Mail from 'shared/components/mail/mail';
import UserSettings from 'player-app/components/user-settings/user-settings';
import UserScores from 'player-app/components/user-scores/user-scores';
// Pages
import SignInPage from 'shared/pages/sign-in-page/sign-in-page';
import SportsPage from 'player-app/pages/sports-page/sports-page';
import LivePage from 'player-app/pages/live-page/live-page';
import CasinoPage from 'player-app/pages/casino-page/casino-page';
import HorsesPage from 'player-app/pages/horses-page/horses-page';
import RulesPage from 'player-app/pages/rules-page/rules-page';
import BalancePage from 'player-app/pages/balance-page/balance-page';
// Styles
import './app-root.sass';

// Font awesome icons
library.add(fas);

const UserAppContainer = ({ location }) => {
  return (
    <div className="app-root">
      {(location.pathname !== '/sign-in') &&
        <>
          <UserHeader />
          <Personalize />
          <Mail />
          <UserSettings />
          <UserScores />
        </>
      }
      <div className={`${location.pathname !== '/sign-in' ? 'app-root__content' : ''}`}>
        <ScrollToTop>
          <Switch>
            <Route path="/sign-in" exact component={SignInPage} />
            <Route path="/sports" exact component={SportsPage} />
            <Route path="/live" component={LivePage} />
            <Route path="/casino" exact component={CasinoPage} />
            <Route path="/horses" exact component={HorsesPage} />
            <Route path="/rules" exact component={RulesPage} />
            <Route path="/balance" exact component={BalancePage} />
            <Redirect to="/sports" />
          </Switch>
        </ScrollToTop>
      </div>
    </div>
  );
};

export default withRouter(UserAppContainer);
