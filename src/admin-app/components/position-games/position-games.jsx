import React, { Fragment, useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchPositionGamesData } from 'admin-app/redux/position-games/actions';
import { selectPositionGames } from 'admin-app/redux/position-games/selectors';
// Components
import Typography from 'shared/components/typography/typography';
import ButtonGroup from 'shared/components/button-group/button-group';
import Button from 'shared/components/button/button';
import PositionTable from 'admin-app/components/position-table/position-table';
import PendingBets from 'admin-app/components/pending-bets/pending-bets';
// Table content
import tableContent from './table-content';
// Styles
import './position-games.sass';

const games = [
  { name: 'football', subFilters: ['game', '1st half', '2nd half', 'quarters'] },
  { name: 'baseball', subFilters: ['game', 'First 5 Innings', '2nd Half'] },
  { name: 'basketball', subFilters: ['game', '1st half', '2nd Half', 'Quarters'] },
  { name: 'hockey', subFilters: ['game', '1st Period', '2nd Period', '3rd Period'] },
  { name: 'ither', subFilters: ['game'] },
  { name: 'soccer', subFilters: ['game', '1st half', '2nd Half'] },
  { name: 'soccer-minor', subFilters: ['gamxe', '1st half', '2nd Half'] },
];

const PositionGames = ({ fetchPositionGamesData, positionGames: { loading, data, error } }) => {
  const [activeGame, setActiveGame] = useState('football');
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
      <div className="position-games">
        <div className="position-games__filters">
          <div className="position-games__filter">
            <div className="position-games__filter-title">
              <Typography component="h3">Available Sports:</Typography>
            </div>
            <ButtonGroup separated nowrap>
              {games.map(({ name }, idx) => (
                <Button key={idx} variant="default" size="sm" isActive={activeGame === name} onClick={() => setActiveGame(name)}>{name}</Button>
              ))}
            </ButtonGroup>
          </div>
          <div className="position-games__filter">
            <div className="position-games__filter-title">
              <Typography component="h3">Available Filters:</Typography>
            </div>
            <ButtonGroup separated nowrap>
              {activeSubfilters.map((name, idx) => (
                <Button key={idx} variant="default" size="sm" isActive={activeSubFilter === name} onClick={() => setActiveSubFilter(name)}>{name}</Button>
              ))}
            </ButtonGroup>
          </div>
        </div>
        <div className="position-games__table">
          <div className="position-today">
            <PositionTable
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

PositionGames.propTypes = {
  fetchPositionGamesData: PropTypes.func,
  distribution: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  positionGames: selectPositionGames
});

const mapDispatchToProps = dispatch => ({
  fetchPositionGamesData: (game, filter) => dispatch(fetchPositionGamesData(game, filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(PositionGames);
