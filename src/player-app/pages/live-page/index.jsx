import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// Components and Layouts
import LiveNavigation from 'player-app/parts/live-navigation'
import LivePlay from 'player-app/layouts/live-play';
import LivePending from 'player-app/layouts/live-pending';
import LiveHistory from 'player-app/layouts/live-history';
// Styles
import './styles.sass';

const LivePage = () => {
  return (
    <div className="live-page">
      <div className="live-page__navigation">
        <LiveNavigation />
      </div>
      <Switch>
        <Route path="/live" exact component={LivePlay} />
        <Route path="/live/pending" exact component={LivePending} />
        <Route path="/live/history" exact component={LiveHistory} />
        <Redirect to="/live" />
      </Switch>
    </div>
  );
};

export default LivePage;
