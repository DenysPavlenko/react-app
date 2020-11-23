import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
// Styles
import './live-navigation.sass';

const nav = [
  { title: 'In-Play', rootName: '/live' },
  { title: 'Pending', rootName: '/live/pending' },
  { title: 'History', rootName: '/live/history' },
  { title: 'Rules', rootName: '/sports' },
  { title: 'LiveTv', rootName: '/sports' },
];

const LiveNavigation = () => {
  return (
    <div className="live-navigation">
      <div className="live-navigation__wrap">
        {nav.map(({ title, rootName }, idx) => (
          <NavLink key={idx} to={rootName} exact={true} className="live-navigation__item">{title}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default withRouter(LiveNavigation);
