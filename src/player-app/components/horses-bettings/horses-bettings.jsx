import React, { Fragment, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchHorsesBettingsData } from 'player-app/redux/horses-bettings/actions';
import { selectHorsesBettings } from 'player-app/redux/horses-bettings/selectors';
import { addHorsesBet } from 'player-app/redux/horses-bets/actions'
// Components
import HorsesBettingsHeader from 'player-app/components/horses-bettings-header/horses-bettings-header';
import HorsesBetLimits from 'player-app/components/horses-bet-limits/horses-bet-limits';
import HorsesBettingsFilters from 'player-app/components/horses-bettings-filters/horses-bettings-filters';
import HorsesBettingsTable from 'player-app/components/horses-bettings-table/horses-bettings-table';
import Spinner from 'shared/components/spinner/spinner';
import ErrorIndicator from 'shared/components/error-indicator/error-indicator';
import Button from 'shared/components/button/button';
// data
import limits from './limits';
// Styles
import './horses-bettings.sass';

const horsesBet = { id: '1', amount: '1.00', bets: '2', details: '1st[1, 2] - 2nd[1, 2]', info: 'Charles Town, Nov 25, Race #1', total: '2', type: 'exacta' };

const HorseBettings = ({ fetchHorsesBettingsData, horsesBettings: { loading, data, error }, addHorsesBet }) => {
  const [currentFilter, setCurrentFilter] = useState('superfecta');
  const [amountOption, setAmountOption] = useState('keyBox');
  const [betAmount, setBetAmount] = useState('1.00');

  useLayoutEffect(() => {
    fetchHorsesBettingsData();
  }, [fetchHorsesBettingsData]);

  const handleFilter = (filter) => setCurrentFilter(filter);

  const checkboxColumns = () => {
    if (amountOption === 'box') return 1;
    else if (currentFilter === 'exacta') return 2;
    else if (currentFilter === 'trifecta') return 3;
    else if (currentFilter === 'superfecta') return 4;
    else return 1;
  };

  return (
    <div className="horses-bettings">
      <div className="horses-bettings__header">
        <HorsesBettingsHeader />
      </div>
      <div className="horses-bettings__content">
        {error && <ErrorIndicator retry={fetchHorsesBettingsData} light />}
        {(!error && loading) && <Spinner boxed light />}
        {(!error && !loading) &&
          <Fragment>
            <div className="horses-bettings__filters">
              <HorsesBettingsFilters
                currentFilter={currentFilter}
                setFilter={handleFilter}
                amountOption={amountOption}
                setAmountOption={setAmountOption}
                betAmount={betAmount}
                setBetAmount={setBetAmount}
              />
            </div>
            <div className="horses-bettings__table">
              <HorsesBettingsTable
                data={data}
                withCheckbox={currentFilter !== 'straight'}
                checkboxColumns={checkboxColumns()}
              />
            </div>
            <div className="horses-bettings__add-bet">
              <Button variant="accent" onClick={() => addHorsesBet({ ...horsesBet, id: Math.random() * 10 })}>Add bet slip</Button>
            </div>
            <div className="horses-bettings__limits">
              {limits
                .filter(({ id }) => id === currentFilter)
                .map(({ id, title, min, max }) => (
                  <HorsesBetLimits showDetails={id === 'straight'} key={id} title={title} min={min} max={max} />
                ))}
            </div>
          </Fragment>
        }
      </div>
    </div>
  )
};

HorseBettings.propTypes = {
  horsesBettings: PropTypes.object,
  fetchHorsesBettingsData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  horsesBettings: selectHorsesBettings,
});

const mapDispatchToProps = dispatch => ({
  fetchHorsesBettingsData: () => dispatch(fetchHorsesBettingsData()),
  addHorsesBet: (bet) => dispatch(addHorsesBet(bet))
});

export default connect(mapStateToProps, mapDispatchToProps)(HorseBettings);
