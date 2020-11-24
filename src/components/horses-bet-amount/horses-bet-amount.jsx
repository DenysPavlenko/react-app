import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Components
import Typography from 'components/typography/typography';
import Input from 'components/input/input';
import Checkbox from 'components/checkbox/checkbox';
// Styles
import './horses-bet-amount.sass';

const HorsesBetAmount = ({ showBoxes }) => {
  const [amount, setAmount] = useState('1.00');
  const [checkboxes, setCheckboxes] = useState({ box: false, keyBox: true });

  const handleInput = (e) => {
    const value = e.target.value;
    setAmount(value);
  };

  const handleCheckbox = (e) => {
    const name = e.target.name;
    setCheckboxes(checkboxes => {
      const newObj = {};
      for (const key in checkboxes) {
        newObj[key] = false;
      }
      return { ...newObj, [name]: true }
    });
  };

  return (
    <div className="horses-bet-amount">
      <Typography component="h3" className="horses-bet-amount__title">Bet amount</Typography>
      <div className="horses-bet-amount__wrap">
        <Input value={amount} className="horses-bet-amount__input" onChange={handleInput} size="sm" type="number" />
        {showBoxes &&
          <div className="horses-bet-amount__boxes">
            <Checkbox
              label="Box"
              onChange={handleCheckbox}
              size="lg"
              variant="light"
              className="horses-bet-amount__checkbox"
              name="box"
              checked={checkboxes.box}
            />
            <Checkbox
              label="Box with key"
              onChange={handleCheckbox}
              size="lg"
              name="keyBox"
              variant="light"
              className="horses-bet-amount__checkbox"
              checked={checkboxes.keyBox}
            />
          </div>
        }
      </div>
    </div>
  );
};

HorsesBetAmount.propTypes = {
  showBoxes: PropTypes.bool,
};

export default HorsesBetAmount;
