import React, { useState } from 'react';
// data
import descriptions from './betting-descriptions';
import bettings from './bettings';
// Components
import HorsesFilters from 'components/horses-filters/horses-filters';
import HorsesTable from 'components/horses-table/horses-table';
import HorsesBetAmount from 'components/horses-bet-amount/horses-bet-amount';
import Typography from 'components/typography/typography';
import Button from 'components/button/button';
// Styles
import './horses-bettings.sass';

const filters = descriptions.map(({ id, title }) => ({ id, title }));

const HorseBettings = () => {

  const [currentFilter, setCurrentFilter] = useState('straight');

  const handleFilter = (filter) => {
    setCurrentFilter(filter);
  };

  const handleBoxesShow = () => (currentFilter === 'exacta' || currentFilter === 'trifecta' || currentFilter === 'superfecta');

  return (
    <div className="horses-bettings">
      <div className="horses-bettings__wrap">
        <HorsesFilters currentFilter={currentFilter} filters={filters} handleFilter={handleFilter} />
        <div className="horses-bettings__description">
          {descriptions
            .filter(({ id }) => id === currentFilter)
            .map(({ id, text }) => (
              <Typography key={id} component="p">{text}</Typography>
            ))}
        </div>
        {currentFilter !== 'straight' && <HorsesBetAmount showBoxes={handleBoxesShow()} />}
      </div>
      <div className="horses-bettings__table">
        <HorsesTable data={bettings} />
      </div>
      <div className="horses-bettings__add-bet">
        <Button variant="accent">Add bet slip</Button>
      </div>
    </div>
  );
};

export default HorseBettings;
