import React, { useLayoutEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchPositionContestsData } from 'redux/position-contests/actions';
import { selectPositionContests } from 'redux/position-contests/selectors';
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
  { name: 'football' },
  { name: 'baseball' },
  { name: 'basketball' },
  { name: 'hockey' },
  { name: 'ither' },
  { name: 'soccer' },
  { name: 'soccer-minor' },
];

const ContestsTab = ({ fetchPositionContestsData, positionContests: { loading, data, error } }) => {
  const [activeContest, setActiveContest] = useState('football');
  const [openModal, setOpenModal] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState('');

  useLayoutEffect(() => {
    fetchPositionContestsData(activeContest);
  }, [fetchPositionContestsData, activeContest]);

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
      <div className="contests-tab">
        <div className="contests-tab__filter">
          <div className="contests-tab__filter-title">
            <Typography component="h3">Available Sports:</Typography>
          </div>
          <ButtonGroup separated nowrap>
            {games.map(({ name }, idx) => (
              <Button key={idx} variant="default" size="sm" isActive={activeContest === name} onClick={() => setActiveContest(name)}>{capitalize(name)}</Button>
            ))}
          </ButtonGroup>
        </div>
        <div className="contests-tab__table">
          <Table
            cols={tableContent(handleAgentSelect)}
            loading={loading}
            data={data}
            error={error}
            retry={() => fetchPositionContestsData(activeContest)}
          />
        </div>
      </div>
    </Fragment>
  );
};

ContestsTab.propTypes = {
  fetchPositionContestsData: PropTypes.func,
  distribution: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  positionContests: selectPositionContests
});

const mapDispatchToProps = dispatch => ({
  fetchPositionContestsData: (game, filter) => dispatch(fetchPositionContestsData(game, filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContestsTab);
