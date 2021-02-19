import React, { Fragment, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchPositionTodayData } from 'redux/position-today/actions';
import { selectPositionToday } from 'redux/position-today/selectors';
// Components
import PositionTable from '../table';
import PendingBets from 'parts/pending-bets';
// Table content
import tableContent from './table-content';
// Styles
import './styles.sass';

const TodayTab = ({ fetchPositionTodayData, positionToday: { loading, data, error } }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState('');

  useLayoutEffect(() => {
    fetchPositionTodayData();
  }, [fetchPositionTodayData])

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
      <div className="today">
        <PositionTable
          cols={tableContent(handleAgentSelect)}
          loading={loading}
          data={data}
          error={error}
          retry={fetchPositionTodayData}
        />
      </div>
    </Fragment>
  );
};

TodayTab.propTypes = {
  fetchPositionTodayData: PropTypes.func,
  distribution: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  positionToday: selectPositionToday
});

const mapDispatchToProps = dispatch => ({
  fetchPositionTodayData: () => dispatch(fetchPositionTodayData())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodayTab);