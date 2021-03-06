import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'redux/color-scheme/selectors';
import { removeSportsWager, addRiskAndWin } from 'redux/sports-wagers/actions';
// Components
import Typography from 'components/typography';
import Image from 'components/image';
import Input from 'components/input';
import Chevron from 'components/chevron';
import ActionIcon from 'components/action-icon';
// Styles
import './styles.sass';

const SportsWager = ({ id, icon, title, value, scheduled, selection, notes, removeSportsWager, addRiskAndWin, colorScheme }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState({
    risk: '',
    toWin: ''
  });

  const handleHeaderClick = () => setShowDetails(showDetails => !showDetails);

  const handleInput = ({ target: { name, value: inputValue } }) => {
    const regx = /[^\d]/g;
    if (regx.test(inputValue)) return;

    let risk, toWin;
    const decimalValue = parseInt(value) / 100;
    if (name === 'risk') {
      toWin = (inputValue * decimalValue).toFixed(2);
      risk = inputValue;
    }
    if (name === 'toWin') {
      toWin = inputValue;
      risk = toWin === '0' ? '0' : (inputValue / decimalValue).toFixed(2);
    }
    setData((data) => ({ ...data, risk, toWin }));
    addRiskAndWin(id, risk, toWin);
  };

  const classes = classNames({
    'sports-wager': true,
    [`theme-${colorScheme}`]: colorScheme
  });

  const { risk, toWin } = data;

  return (
    <div className={classes}>
      <div className="sports-wager__header" onClick={handleHeaderClick}>
        <Typography component="h5" className="sports-wager__header-title">NFL</Typography>
        <Chevron isActive={showDetails} />
      </div>
      <div className="sports-wager__info">
        <div className="sports-wager__team">
          <Image src={icon} alt="icon" className="sports-wager__team-icon" />
          <Typography component="h5" className="sports-wager__team-title">{title}</Typography>
        </div>
        <Typography component="h5" className="sports-wager__bet">{value}</Typography>
      </div>
      {showDetails &&
        <div className="sports-wager__details">
          <Typography component="p" variant="p-sm" className="sports-wager__detail"><span>Scheduled: </span>{scheduled}</Typography>
          <Typography component="p" variant="p-sm" className="sports-wager__detail"><span>Selection: </span>{selection}</Typography>
          <Typography component="p" variant="p-sm" className="sports-wager__detail"><span>Game Notes: </span>{notes}</Typography>
        </div>
      }
      <div className="sports-wager__footer">
        <ActionIcon icon="trash" color="danger" onClick={() => removeSportsWager(id)} />
        <div className="sports-wager__inputs">
          <Input type="text" size="xs" value={risk} name="risk" onChange={handleInput} placeholder="Risk Amount" variant="primary" />
          <Typography component="p" variant="p-sm" className="sports-wager__inputs-title">To win</Typography>
          <Input type="text" size="xs" value={toWin} name="toWin" onChange={handleInput} placeholder="Win Amount" variant="primary" />
        </div>
      </div>
    </div>
  );
};

SportsWager.propTypes = {
  colorScheme: PropTypes.string,
  id: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  scheduled: PropTypes.string,
  selection: PropTypes.string,
  notes: PropTypes.string,
  removeSportsWager: PropTypes.func,
  addRiskAndWin: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  colorScheme: selectColorScheme,
});

const mapDispatchToProps = dispatch => ({
  removeSportsWager: (id) => dispatch(removeSportsWager(id)),
  addRiskAndWin: (id, risk, toWin) => dispatch(addRiskAndWin(id, risk, toWin)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SportsWager);
