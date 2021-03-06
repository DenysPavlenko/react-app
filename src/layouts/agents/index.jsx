import React, { Fragment, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { agentsRequested } from 'redux/agents/actions';
import { selectAgents } from 'redux/agents/selectors';
// Components
import PrimaryTable from 'components/primary-table';
import CreateAgent from 'parts/create-agent';
import AgentsHeader from './agents-header';
// Table content
import tableContent from './table-content';
// Utils
import searchFilter from 'utils/search-filter';
// Styles
import './styles.sass';

const Agents = ({ agentsRequested, agents: { loading, data, error }, history }) => {
  const [searchValue, setSearchValue] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  useLayoutEffect(() => {
    agentsRequested();
  }, [agentsRequested])

  const handleSearch = value => {
    setSearchValue(value.toLowerCase());
  };

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const filteredData = () => data && data.filter(item => searchFilter(item, searchValue));

  return (
    <Fragment>
      <CreateAgent open={modalOpen} onClose={handleModalClose} />
      <div className="agents">
        <div className="agents__header">
          <AgentsHeader handleSearch={handleSearch} handleModalOpen={handleModalOpen} />
        </div>
        <div className="agents__table">
          <PrimaryTable
            cols={tableContent(history)}
            loading={loading}
            data={filteredData()}
            error={error}
            retry={agentsRequested}
          />
        </div>
      </div>
    </Fragment>
  );
};

Agents.propTypes = {
  agentsRequested: PropTypes.func,
  agents: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  agents: selectAgents
});

const mapDispatchToProps = {
  agentsRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Agents));
