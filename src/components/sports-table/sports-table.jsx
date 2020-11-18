import React from 'react';
// Components
import SportsTableHeader from './sports-table-header/sports-table-header';
import SportsTableSubHeader from './sports-table-sub-header/sports-table-sub-header';
// Styles
import './sports-table.sass';

const SportsTable = () => {
  return (
    <table className="sports-table">
      <SportsTableHeader />
      <SportsTableSubHeader />
    </table>
  );
};

export default SportsTable;
