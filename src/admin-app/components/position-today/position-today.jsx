import React, { Fragment, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchPositionTodayData } from 'admin-app/redux/position-today/actions';
import { selectPositionToday } from 'admin-app/redux/position-today/selectors';
// Components
import PositionTable from 'admin-app/components/position-table/position-table';
import PendingBets from 'admin-app/components/pending-bets/pending-bets';
// Table content
import tableContent from './table-content';
// Styles
import './position-today.sass';

const PositionToday = ({ fetchPositionTodayData, positionToday: { loading, data, error } }) => {
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
      <div className="position-today">
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

PositionToday.propTypes = {
  fetchPositionTodayData: PropTypes.func,
  distribution: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  positionToday: selectPositionToday
});

const mapDispatchToProps = dispatch => ({
  fetchPositionTodayData: () => dispatch(fetchPositionTodayData())
});

export default connect(mapStateToProps, mapDispatchToProps)(PositionToday);
