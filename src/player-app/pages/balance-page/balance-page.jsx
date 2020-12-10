import React from 'react';
// Components
import WeeklyFigures from 'player-app/components/weekly-figures/weekly-figures';
import PendingWagers from 'player-app/components/pending-wagers/pending-wagers';
import Transactions from 'player-app/components/transactions/transactions';
// Styles
import './balance-page.sass';

const BalancePage = () => {
  return (
    <div className="balance-page">
      <div className="balance-page__row">
        <div className="balance-page__left">
          <WeeklyFigures />
        </div>
        <div className="balance-page__center">
          <PendingWagers />
        </div>
        <div className="balance-page__right">
          <Transactions />
        </div>
      </div>
    </div>
  );
};

export default BalancePage;