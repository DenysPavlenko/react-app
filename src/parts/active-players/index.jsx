import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchActivePlayersData, toggleActivePlayers } from 'redux/active-players/actions';
import { selectActivePlayers, selectShowActivePlayers } from 'redux/active-players/selectors';
// Components
import DataPreviewModal from 'components/data-preview-modal';
import Typography from 'components/typography';
import PrimaryTable from 'components/primary-table';
// Table content
import tableContent from './table-content';
// Styles
import './styles.sass';

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
