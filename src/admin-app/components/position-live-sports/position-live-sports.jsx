import React, { Fragment, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchPositionLiveSportsData } from 'admin-app/redux/position-live-sports/actions';
import { selectPositionLiveSports } from 'admin-app/redux/position-live-sports/selectors';
// Components
import PositionTable from 'admin-app/components/position-table/position-table';
import PendingBets from 'admin-app/components/pending-bets/pending-bets';
// Table content
import tableContent from './table-content';
// Styles
import './position-live-sports.sass';

const PositionLiveSports = ({ fetchPositionLiveSportsData, positionLiveSports: { loading, data, error } }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState('');

  useLayoutEffect(() => {
    fetchPositionLiveSportsData();
  }, [fetchPositionLiveSportsData])

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
      <div className="position-live-sports">
        <PositionTable
          cols={tableContent(handleAgentSelect)}
          loading={loading}
          data={data}
          error={error}
          retry={fetchPositionLiveSportsData}
        />
      </div>
    </Fragment>
  );
};

PositionLiveSports.propTypes = {
  fetchPositionLiveSportsData: PropTypes.func,
  distribution: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  positionLiveSports: selectPositionLiveSports
});

const mapDispatchToProps = dispatch => ({
  fetchPositionLiveSportsData: () => dispatch(fetchPositionLiveSportsData())
});

export default connect(mapStateToProps, mapDispatchToProps)(PositionLiveSports);
