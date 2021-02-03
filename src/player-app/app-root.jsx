import React, { Fragment, useLayoutEffect } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { connect } from 'react-redux';
// Redux
import { fetchUserData } from 'shared/redux/user/actions';
// Components
import ScrollToTop from 'shared/components/scroll-to-top';
import PlayerHeader from 'player-app/parts/player-header';
import Personalize from 'shared/components/personalize';
import Mail from 'shared/parts/mail';
import PlayerSettings from 'player-app/parts/player-settings';
import Scores from 'player-app/parts/scores';
// Pages
import SignInPage from 'shared/pages/sign-in-page';
import SportsPage from 'player-app/pages/sports-page';
import LivePage from 'player-app/pages/live-page';
import CasinoPage from 'player-app/pages/casino-page';
import HorsesPage from 'player-app/pages/horses-page';
import RulesPage from 'player-app/pages/rules-page';
import BalancePage from 'player-app/pages/balance-page';
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
          <PlayerHeader />
          <Personalize />
          <Mail />
          <PlayerSettings />
          <Scores />
        </Fragment>
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

const mapDispatchToProps = dispatch => ({
  fetchUserData: () => dispatch(fetchUserData())
});

export default connect(null, mapDispatchToProps)(withRouter(AppRoot));
