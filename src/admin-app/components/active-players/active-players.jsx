import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchActivePlayersData, toggleActivePlayers } from 'admin-app/redux/active-players/actions';
import { selectActivePlayers, selectShowActivePlayers } from 'admin-app/redux/active-players/selectors';
// Components
import Modal from 'shared/components/modal/modal';
import Typography from 'shared/components/typography/typography';
import Close from 'shared/components/close/close';
import PrimaryTable from 'shared/components/primary-table/primary-table';
import Button from 'shared/components/button/button';
// Table content
import tableContent from './table-content';
// Styles
import './active-players.sass';

const ActivePlayers = ({ toggleActivePlayers, fetchActivePlayersData, activePlayers: { loading, data, error }, showActivePlayers }) => {

  useLayoutEffect(() => {
    showActivePlayers && fetchActivePlayersData();
  }, [fetchActivePlayersData, showActivePlayers]);

  return (
    <Modal open={showActivePlayers} className="active-players" onClose={toggleActivePlayers} noClose size="lg">
      <div className="active-players__header">
        <Typography component="h3">ZTMA - Active Customers</Typography>
        <Close dark onClick={toggleActivePlayers} />
      </div>
      <div className="active-players__content">
        <PrimaryTable
          cols={tableContent()}
          loading={loading}
          retry={fetchActivePlayersData}
          data={data}
          error={error}
        />
        {data &&
          <div className="active-players__content-footer">
            <Typography component="h4" className="text-bold">Total players: {data.length}</Typography>
          </div>
        }
      </div>
      <div className="active-players__footer">
        <Button variant="danger" size="sm" onClick={toggleActivePlayers}>Close</Button>
      </div>
    </Modal>
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
