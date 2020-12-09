import React from 'react';
// Components
import PendingHeader from './pending-header/pending-header';
// Styles
import './pending.sass';

const Pending = () => {
  return (
    <div className="pending">
      <PendingHeader />
    </div>
  );
};

export default Pending;
