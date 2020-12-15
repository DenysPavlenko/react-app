import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchClientPendingData } from 'admin-app/redux/client-pending/actions';
import { selectClientPending } from 'admin-app/redux/client-pending/selectors';
// Components
import PrimaryTable from 'shared/components/primary-table/primary-table';
import Search from 'shared/components/search/search';
// Table content
import tableContent from './table-content';
// Utils
import searchFilter from 'shared/utils/search-filter';
// Styles
import './client-control-pending.sass';

const ClientControlPending = ({ fetchClientPendingData, clientPending: { loading, data, error }, clientId }) => {
  const [searchValue, setSearchValue] = useState('');

  useLayoutEffect(() => {
    fetchClientPendingData(clientId)
  }, [clientId, fetchClientPendingData]);

  const filteredData = () => data && data.filter(item => searchFilter(item, searchValue));

  const handleSearch = value => {
    setSearchValue(value.toLowerCase());
  };

  const handleDelete = id => { console.log('id:', id) };

  return (
    <div className="client-control-pending">
      <div className="client-control-pending__search">
        <Search onChange={handleSearch} variant="primary" />
      </div>
      <div className="client-control-pending__table">
        <PrimaryTable cols={tableContent(handleDelete)} loading={loading} data={filteredData()} error={error} retry={() => fetchClientPendingData(clientId)} variant="primary" />
      </div>
    </div>
  );
};

ClientControlPending.propTypes = {
  fetchClientPendingData: PropTypes.func,
  clientPending: PropTypes.object,
  clientId: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  clientPending: selectClientPending
});

const mapDispatchToProps = dispatch => ({
  fetchClientPendingData: clientId => dispatch(fetchClientPendingData(clientId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientControlPending);
