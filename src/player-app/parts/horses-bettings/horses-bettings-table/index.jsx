import React from 'react';
// Components
import PrimaryTable from 'shared/components/primary-table';
// Table content
import tableContent from './table-content';
// Styles
import './styles.sass';

const HorsesBettingsTable = ({ data, withCheckbox, checkboxColumns }) => {
  return (
    <div className="horses-bettings-table">
      <PrimaryTable
        cols={tableContent(withCheckbox, checkboxColumns)}
        data={data}
      />
    </div>
  );
};

export default HorsesBettingsTable;
