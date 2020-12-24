import React, { useState } from 'react';
// Components
import PrimaryTable from 'shared/components/primary-table/primary-table';
// Table content
import tableContent from './table-content';
// Styles
import './horses-bettings-table.sass';

const HorsesBettingsTable = ({ data, withCheckbox, checkboxColumns }) => {
  return (
    <div className="horses-bettings-table">
      <PrimaryTable
        cols={tableContent(withCheckbox, checkboxColumns)}
        data={data}
        variant="primary"
      />
    </div>
  );
};

export default HorsesBettingsTable;
