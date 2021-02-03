import React, { Fragment, useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchPositionGamesData } from 'admin-app/redux/position-games/actions';
import { selectPositionGames } from 'admin-app/redux/position-games/selectors';
// Components
import Typography from 'shared/components/typography';
import ButtonGroup from 'shared/components/button-group';
import Button from 'shared/components/button';
import Table from '../table';
import PendingBets from 'admin-app/parts/pending-bets';
// Table content
import tableContent from './table-content';
// Styles
import './styles.sass';

const games = [
  { name: 'Football', subFilters: ['Game', '1st half', '2nd half', 'Quarters'] },
  { name: 'Baseball', subFilters: ['Game', 'First 5 Innings', '2nd Half'] },
  { name: 'Basketball', subFilters: ['Game', '1st half', '2nd Half', 'Quarters'] },
  { name: 'Hockey', subFilters: ['Game', '1st Period', '2nd Period', '3rd Period'] },
  { name: 'Ither', subFilters: ['Game'] },
  { name: 'Soccer', subFilters: ['Game', '1st half', '2nd Half'] },
  { name: 'Soccer-minor', subFilters: ['Gamxe', '1st half', '2nd Half'] },
];

const GamesTab = ({ fetchPositionGamesData, positionGames: { loading, data, error } }) => {
  const [activeGame, setActiveGame] = useState('Football');
  const [activeSubFilter, setActiveSubFilter] = useState(games[0].subFilters[0]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState('');

  const activeSubfilters = games.filter(({ name }) => name === activeGame)[0].subFilters;

  useLayoutEffect(() => {
    fetchPositionGamesData(activeGame, activeSubFilter);
  }, [fetchPositionGamesData, activeGame, activeSubFilter]);

  useEffect(() => {
    const idx = games.findIndex(({ name }) => name === activeGame);
    setActiveSubFilter(games[idx].subFilters[0]);
  }, [activeGame]);

  const handleAgentSelect = agent => {
    setOpenModal(true);
    setSelectedAgent(agent);
  };

  return (
    <Fragment>
      <PendingBets
        open={openModal}
        agent={selectedAgent}
        onClose={() => setOpenModal(false)}
        onExited={() => setSelectedAgent('')}
      />
      <div className="games-tab">
        <div className="games-tab__filters">
          <div className="games-tab__filter">
            <div className="games-tab__filter-title">
              <Typography component="h3">Available Sports:</Typography>
            </div>
            <ButtonGroup separated nowrap>
              {games.map(({ name }, idx) => (
                <Button key={idx} variant="default" size="sm" isActive={activeGame === name} onClick={() => setActiveGame(name)}>{name}</Button>
              ))}
            </ButtonGroup>
          </div>
          <div className="games-tab__filter">
            <div className="games-tab__filter-title">
              <Typography component="h3">Available Filters:</Typography>
            </div>
            <ButtonGroup separated nowrap>
              {activeSubfilters.map((name, idx) => (
                <Button key={idx} variant="default" size="sm" isActive={activeSubFilter === name} onClick={() => setActiveSubFilter(name)}>{name}</Button>
              ))}
            </ButtonGroup>
          </div>
        </div>
        <div className="games-tab__table">
          <div className="position-today">
            <Table
              cols={tableContent(handleAgentSelect)}
              loading={loading}
              data={data}
              error={error}
              retry={() => fetchPositionGamesData(activeGame, activeSubFilter)}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

GamesTab.propTypes = {
  fetchPositionGamesData: PropTypes.func,
  distribution: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  positionGames: selectPositionGames
});

const mapDispatchToProps = dispatch => ({
  fetchPositionGamesData: (game, filter) => dispatch(fetchPositionGamesData(game, filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(GamesTab);
