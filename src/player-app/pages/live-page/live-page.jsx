import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// Components
import LiveNavigation from 'player-app/components/live-navigation/live-navigation'
import LivePlay from 'player-app/components/live-play/live-play';
import LivePending from 'player-app/components/live-pending/live-pending';
import LiveHistory from 'player-app/components/live-history/live-history';
// Styles
import './live-page.sass';

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
