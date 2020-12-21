import React, { Fragment, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchAgentsData } from 'admin-app/redux/agents/actions';
import { selectAgents } from 'admin-app/redux/agents/selectors';
// Components
import PrimaryTable from 'shared/components/primary-table/primary-table';
import CreateAgent from 'admin-app/components/create-agent/create-agent';
import AgentsHeader from './agents-header/agents-header';
// Table content
import tableContent from './table-content';
// Utils
import searchFilter from 'shared/utils/search-filter';
// Styles
import './agents.sass';

const Agents = ({ fetchAgentsData, agents: { loading, data, error }, history }) => {
  const [searchValue, setSearchValue] = useState('');
  const [modalOpen, setModalOpen] = useState(true);

  useLayoutEffect(() => {
    fetchAgentsData();
  }, [fetchAgentsData])

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
            retry={fetchAgentsData}
            variant="primary"
          />
        </div>
      </div>
    </Fragment>
  );
};

Agents.propTypes = {
  fetchAgentsData: PropTypes.func,
  agents: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  agents: selectAgents
});

const mapDispatchToProps = dispatch => ({
  fetchAgentsData: () => dispatch(fetchAgentsData())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Agents));
