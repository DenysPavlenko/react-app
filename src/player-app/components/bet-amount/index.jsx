import React from 'react';
import PropTypes from 'prop-types';
// Components
import Typography from 'shared/components/typography';
import Input from 'shared/components/input';
import RadioButton from 'shared/components/radio-button';
// Styles
import './styles.sass';

const BetAmount = ({ options, amountOption, handleAmountOption, betAmount, setBetAmount }) => {

  const handleInput = ({ target: { value } }) => setBetAmount(value);
  const handleRadioButton = ({ target: { value } }) => handleAmountOption(value);

  return (
    <div className="bet-amount">
      <Typography component="h3" className="bet-amount__title">Bet amount</Typography>
      <div className="bet-amount__wrap">
        <Input value={betAmount} className="bet-amount__input" onChange={handleInput} size="sm" type="number" variant="primary" />
        <div className="bet-amount__buttons">
          {options.map(({ title, option }, idx) => (
            <RadioButton
              key={idx}
              className="bet-amount__button"
              label={title}
              value={option}
              onChange={handleRadioButton}
              checked={amountOption === option}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

BetAmount.propTypes = {
  options: PropTypes.array,
  amountOption: PropTypes.string,
  handleAmountOption: PropTypes.func,
  betAmount: PropTypes.string,
  setBetAmount: PropTypes.func,
};

export default BetAmount;
