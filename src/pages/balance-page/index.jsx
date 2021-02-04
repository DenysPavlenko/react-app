import React from 'react';
// Parts
import WeeklyFigures from 'parts/weekly-figures';
import PendingWagers from 'parts/pending-wagers';
import MyTransactions from 'parts/my-transactions';
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
          <MyTransactions />
        </div>
      </div>
    </div>
  );
};

export default BalancePage;
