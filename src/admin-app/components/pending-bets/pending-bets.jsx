import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchPendingBetsData } from 'admin-app/redux/pending-bets/actions';
import { selectPendingBets } from 'admin-app/redux/pending-bets/selectors';
// Components
import Modal from 'shared/components/modal/modal';
import Typography from 'shared/components/typography/typography';
import Close from 'shared/components/close/close';
import PrimaryTable from 'shared/components/primary-table/primary-table';
import Button from 'shared/components/button/button';
// Table content
import tableContent from './table-content';
// Styles
import './pending-bets.sass';

const PendingBets = ({ agent, open, onClose, onExited, fetchPendingBetsData, pendingBets: { loading, data, error } }) => {

  useLayoutEffect(() => {
    fetchPendingBetsData(agent);
  }, [fetchPendingBetsData, agent]);

  return (
    <Modal open={open} className="pending-bets" onClose={onClose} noClose onExited={onExited} size="xl">
      <div className="pending-bets__header">
        <Typography component="h3">Pending bets</Typography>
        <Close dark onClick={onClose} />
      </div>
      <div className="pending-bets__content">
        <PrimaryTable
          cols={tableContent()}
          loading={loading}
          retry={() => fetchPendingBetsData(agent)}
          data={data}
          error={error}
        />
        {data &&
          <div className="pending-bets__content-footer">
            <Typography component="h4" className="text-bold">Total pending bets: {data.length}</Typography>
          </div>
        }
      </div>
      <div className="pending-bets__footer">
        <Button variant="danger" size="sm" onClick={onClose}>Close</Button>
      </div>
    </Modal>
  );
};

PendingBets.propTypes = {
  agent: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onExited: PropTypes.func,
  togglePendingBets: PropTypes.func,
  fetchPendingBetsData: PropTypes.func,
  pendingBets: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  pendingBets: selectPendingBets,
});

const mapDispatchToProps = dispatch => ({
  fetchPendingBetsData: (agent) => dispatch(fetchPendingBetsData(agent)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PendingBets);
