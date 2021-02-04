import React, { Fragment, useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchPositionGamesData } from 'redux/position-games/actions';
import { selectPositionGames } from 'redux/position-games/selectors';
// Components
import Typography from 'components/typography';
import ButtonGroup from 'components/button-group';
import Button from 'components/button';
import Table from '../table';
import PendingBets from 'parts/pending-bets';
// Table content
import tableContent from './table-content';
// Utils
import capitalize from 'utils/capitalize';
// Styles
import './styles.sass';

const games = [
  { name: 'football', subFilters: ['game', '1st half', '2nd half', 'quarters'] },
  { name: 'baseball', subFilters: ['game', 'first 5 innings', '2nd half'] },
  { name: 'basketball', subFilters: ['game', '1st half', '2nd half', 'quarters'] },
  { name: 'hockey', subFilters: ['game', '1st period', '2nd period', '3rd period'] },
  { name: 'ither', subFilters: ['game'] },
  { name: 'soccer', subFilters: ['game', '1st half', '2nd half'] },
  { name: 'soccer-minor', subFilters: ['game', '1st half', '2nd half'] },
];

const GamesTab = ({ fetchPositionGamesData, positionGames: { loading, data, error } }) => {
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
      <div className="games-tab">
        <div className="games-tab__filters">
          <div className="games-tab__filter">
            <div className="games-tab__filter-title">
              <Typography component="h3">Available Sports:</Typography>
            </div>
            <ButtonGroup separated nowrap>
              {games.map(({ name }, idx) => (
                <Button key={idx} variant="default" size="sm" isActive={activeGame === name} onClick={() => setActiveGame(name)}>{capitalize(name)}</Button>
              ))}
            </ButtonGroup>
          </div>
          <div className="games-tab__filter">
            <div className="games-tab__filter-title">
              <Typography component="h3">Available Filters:</Typography>
            </div>
            <ButtonGroup separated nowrap>
              {activeSubfilters.map((name, idx) => (
                <Button key={idx} variant="default" size="sm" isActive={activeSubFilter === name} onClick={() => setActiveSubFilter(name)}>{capitalize(name)}</Button>
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
