import React, { useLayoutEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchPositionContestsData } from 'admin-app/redux/position-contests/actions';
import { selectPositionContests } from 'admin-app/redux/position-contests/selectors';
// Components
import Typography from 'shared/components/typography/typography';
import ButtonGroup from 'shared/components/button-group/button-group';
import Button from 'shared/components/button/button';
import PositionTable from 'admin-app/components/position-table/position-table';
import PendingBets from 'admin-app/components/pending-bets/pending-bets';
// Table content
import tableContent from './table-content';
// Styles
import './position-contests.sass';

const games = [
  { name: 'football' },
  { name: 'baseball' },
  { name: 'basketball' },
  { name: 'hockey' },
  { name: 'ither' },
  { name: 'soccer' },
  { name: 'soccer-minor' },
];

const PositionContests = ({ fetchPositionContestsData, positionContests: { loading, data, error } }) => {
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
      <div className="position-contests">
        <div className="position-contests__filter">
          <div className="position-contests__filter-title">
            <Typography component="h3">Available Sports:</Typography>
          </div>
          <ButtonGroup separated nowrap>
            {games.map(({ name }, idx) => (
              <Button key={idx} variant="default" size="sm" isActive={activeContest === name} onClick={() => setActiveContest(name)}>{name}</Button>
            ))}
          </ButtonGroup>
        </div>
        <div className="position-contests__table">
          <PositionTable
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

PositionContests.propTypes = {
  fetchPositionContestsData: PropTypes.func,
  distribution: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  positionContests: selectPositionContests
});

const mapDispatchToProps = dispatch => ({
  fetchPositionContestsData: (game, filter) => dispatch(fetchPositionContestsData(game, filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(PositionContests);
