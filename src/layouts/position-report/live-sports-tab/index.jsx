import React, { Fragment, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { positionLiveSportsRequested } from 'redux/position-live-sports/actions';
import { selectPositionLiveSports } from 'redux/position-live-sports/selectors';
// Components
import Table from '../table';
import PendingBets from 'parts/pending-bets';
// Table content
import tableContent from './table-content';
// Styles
import './styles.sass';

const LiveSportsTab = ({ positionLiveSportsRequested, positionLiveSports: { loading, data, error } }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState('');

  useLayoutEffect(() => {
    positionLiveSportsRequested();
  }, [positionLiveSportsRequested])

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
      <div className="live-sports-tab">
        <Table
          cols={tableContent(handleAgentSelect)}
          loading={loading}
          data={data}
          error={error}
          retry={positionLiveSportsRequested}
        />
      </div>
    </Fragment>
  );
};

LiveSportsTab.propTypes = {
  positionLiveSportsRequested: PropTypes.func,
  distribution: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  positionLiveSports: selectPositionLiveSports
});

const mapDispatchToProps = {
  positionLiveSportsRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(LiveSportsTab);
