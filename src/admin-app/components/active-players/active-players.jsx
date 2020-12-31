import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchActivePlayersData, toggleActivePlayers } from 'admin-app/redux/active-players/actions';
import { selectActivePlayers, selectShowActivePlayers } from 'admin-app/redux/active-players/selectors';
// Components
import DataPreviewModal from 'admin-app/components/data-preview-modal/data-preview-modal';
import Typography from 'shared/components/typography/typography';
import PrimaryTable from 'shared/components/primary-table/primary-table';
// Table content
import tableContent from './table-content';
// Styles
import './active-players.sass';

const ActivePlayers = ({ toggleActivePlayers, fetchActivePlayersData, activePlayers: { loading, data, error }, showActivePlayers }) => {

  useLayoutEffect(() => {
    showActivePlayers && fetchActivePlayersData();
  }, [fetchActivePlayersData, showActivePlayers]);

  return (
    <DataPreviewModal
      open={showActivePlayers}
      onClose={toggleActivePlayers}
      title={
        <Typography component="h3">ZTMA - Active Customers</Typography>
      }
      content={
        <PrimaryTable
          cols={tableContent()}
          loading={loading}
          retry={fetchActivePlayersData}
          data={data}
          variant="primary-light"
          error={error}
        />
      }
      total={
        <Typography component="h4" className="text-bold">Total players: {data && data.length}</Typography>
      }
    />
  );
};

ActivePlayers.propTypes = {
  toggleActivePlayers: PropTypes.func,
  fetchActivePlayersData: PropTypes.func,
  activePlayers: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  activePlayers: selectActivePlayers,
  showActivePlayers: selectShowActivePlayers,
});

const mapDispatchToProps = dispatch => ({
  fetchActivePlayersData: () => dispatch(fetchActivePlayersData()),
  toggleActivePlayers: () => dispatch(toggleActivePlayers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivePlayers);
