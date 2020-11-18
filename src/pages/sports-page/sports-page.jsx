import React from 'react';
// Components
import Search from 'components/search/search';
import SportsSchedule from 'components/sports-schedule/sports-schedule';
import WagerTypes from 'components/wager-types/wager-types';
import SportsPreview from 'components/sports-preview/sports-preview';
// Styles
import './sports-page.sass';

const SportsPage = () => {
  return (
    <div className="sports-page">
      <div className="sports-page__left">
        <Search />
        <SportsSchedule />
      </div>
      <div className="sports-page__right">
        <WagerTypes />
        <SportsPreview />
      </div>
    </div>
  );
};

export default SportsPage;
