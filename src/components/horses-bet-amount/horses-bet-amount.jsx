import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Components
import Typography from 'components/typography/typography';
import Input from 'components/input/input';
import RadioButton from 'components/radio-button/radio-button';
// Styles
import './horses-bet-amount.sass';

const HorsesBetAmount = ({ showButtons, options, amountOption, handleAmountOption }) => {
  const [amount, setAmount] = useState('1.00');

  const handleInput = (e) => {
    const value = e.target.value;
    setAmount(value);
  };

  const handleButton = (e) => {
    const value = e.target.value;
    handleAmountOption(value);
  };

  return (
    <div className="horses-bet-amount">
      <Typography component="h3" className="horses-bet-amount__title">Bet amount</Typography>
      <div className="horses-bet-amount__wrap">
        <Input value={amount} className="horses-bet-amount__input" onChange={handleInput} size="sm" type="number" />
        <div className="horses-bet-amount__buttons">
          {showButtons &&
            <>
              {options.map(({ title, option }, idx) => (
                <RadioButton
                  key={idx}
                  className="horses-bet-amount__button"
                  label={title}
                  value={option}
                  onChange={handleButton}
                  checked={amountOption === option}
                />
              ))}
            </>
          }
        </div>
      </div>
    </div>
  );
};

HorsesBetAmount.propTypes = {
  showButtons: PropTypes.bool,
};

export default HorsesBetAmount;
