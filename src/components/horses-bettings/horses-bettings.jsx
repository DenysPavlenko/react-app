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

const HorseBettings = () => {
  const [currentFilter, setCurrentFilter] = useState('exacta');
  const [amountOption, setAmountOption] = useState('keyBox');

  const horseFilters = descriptions.map(({ id, title }) => ({ id, title }));

  const handleFilter = (filter) => {
    setCurrentFilter(filter);
    setAmountOption('keyBox');
  };

  const handleAmountOption = value => setAmountOption(value);

  const handleButtonsShow = () => (currentFilter === 'exacta' || currentFilter === 'trifecta' || currentFilter === 'superfecta');

  const checkboxColumns = () => {
    if (amountOption === 'box') return 1;
    else if (currentFilter === 'exacta') return 2;
    else if (currentFilter === 'trifecta') return 3;
    else if (currentFilter === 'superfecta') return 4;
    else return 1;
  };

  return (
    <div className="horses-bettings">
      <div className="horses-bettings__wrap">
        <HorsesFilters currentFilter={currentFilter} filters={horseFilters} handleFilter={handleFilter} />
        <div className="horses-bettings__description">
          {descriptions
            .filter(({ id }) => id === currentFilter)
            .map(({ id, text }) => (
              <Typography key={id} component="p">{text}</Typography>
            ))}
        </div>
        {currentFilter !== 'straight' &&
          <HorsesBetAmount
            amountOption={amountOption}
            options={[
              { title: 'Box', option: 'box' },
              { title: 'Box with key', option: 'keyBox' },
            ]}
            handleAmountOption={handleAmountOption}
            showButtons={handleButtonsShow()}
          />}
      </div>
      <div className="horses-bettings__table">
        <HorsesTable withCheckbox={currentFilter !== 'straight'} data={bettings} checkboxColumns={checkboxColumns()} />
      </div>
      <div className="horses-bettings__add-bet">
        <Button variant="accent">Add bet slip</Button>
      </div>
    </div>
  );
};

export default HorseBettings;
