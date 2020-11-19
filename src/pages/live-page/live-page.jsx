import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// Components
import LiveNavigation from 'components/live-navigation/live-navigation'
import LiveInPlay from 'components/live-in-play/live-in-play';
import LivePending from 'components/live-pending/live-pending';
import LiveHistory from 'components/live-history/live-history';
// Styles
import './live-page.sass';

const LivePage = () => {
  return (
    <div className="live-page">
      <div className="live-page__navigation">
        <LiveNavigation />
      </div>
      <Switch>
        <Route path="/live" exact component={LiveInPlay} />
        <Route path="/live/pending" exact component={LivePending} />
        <Route path="/live/history" exact component={LiveHistory} />
        <Redirect to="/live" />
      </Switch>
    </div>
  );
};

export default LivePage;
