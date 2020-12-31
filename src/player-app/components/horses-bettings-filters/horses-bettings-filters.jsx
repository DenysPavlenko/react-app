import React from 'react';
// Components
import Button from 'shared/components/button/button';
import ButtonGroup from 'shared/components/button-group/button-group';
import Typography from 'shared/components/typography/typography';
import BetAmount from 'player-app/components/bet-amount/bet-amount';
// data
import descriptions from './descriptions';
// Styles
import './horses-bettings-filters.sass';

const HorsesBettingsFilters = ({ currentFilter, setFilter, amountOption, setAmountOption, betAmount, setBetAmount }) => {
  const horseFilters = descriptions.map(({ id, title }) => ({ id, title }));
  const showOptions = (currentFilter === 'exacta' || currentFilter === 'trifecta' || currentFilter === 'superfecta');
  const handleAmountOption = value => setAmountOption(value);
  const options = [
    { title: 'Box', option: 'box' },
    { title: 'Box with key', option: 'keyBox' },
  ];

  return (
    <div className="horses-bettings-filters">
      <ButtonGroup className="horses-bettings-filters__item">
        {horseFilters.map(({ id, title }) => (
          <Button key={id} isActive={id === currentFilter} onClick={() => setFilter(id)} variant="default" size="sm">
            {title}
          </Button>
        ))}
      </ButtonGroup>
      <div className="horses-bettings-filters__item">
        {descriptions
          .filter(({ id }) => id === currentFilter)
          .map(({ id, text }) => (
            <Typography key={id} component="p">{text}</Typography>
          ))}
      </div>
      {currentFilter !== 'straight' &&
        <div className="horses-bettings-filters__item">
          <BetAmount
            amountOption={amountOption}
            betAmount={betAmount}
            setBetAmount={setBetAmount}
            options={showOptions ? options : []}
            handleAmountOption={handleAmountOption}
          />
        </div>
      }
    </div>
  );
};

export default HorsesBettingsFilters;
