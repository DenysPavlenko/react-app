import React from 'react';
// Components
import Search from 'components/search/search';
import SportsSchedule from 'components/sports-schedule/sports-schedule';
// Styles
import './sports-page.sass';

const SportsPage = () => {
  return (
    <div className="sports-page">
      <div className="sports-page__left">
        <Search />
        <SportsSchedule />
      </div>
      <div className="sports-page__right"></div>
    </div>
  );
};

export default SportsPage;
