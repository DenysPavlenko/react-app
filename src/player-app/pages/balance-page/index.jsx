import React from 'react';
// Parts
import WeeklyFigures from 'player-app/parts/weekly-figures';
import PendingWagers from 'player-app/parts/pending-wagers';
import Transactions from 'player-app/parts/transactions';
// Styles
import './styles.sass';

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
