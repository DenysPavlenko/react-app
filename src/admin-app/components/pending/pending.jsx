import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchPendingData } from 'admin-app/redux/pending/actions';
import { selectPending } from 'admin-app/redux/pending/selectors';
// Components
import PendingHeader from './pending-header/pending-header';
import CustomTable from 'admin-app/components/custom-table/custom-table';
// Table constants
import tableConstants from './table-constants';
// Utils
import searchFilter from 'shared/utils/search-filter';
// Styles
import './pending.sass';

const Pending = ({ fetchPendingData, pending: { loading, data, error } }) => {
  const [currentFilter, setCurrentFilter] = useState('games');
  const [searchValue, setSearchValue] = useState('');

  useLayoutEffect(() => {
    fetchPendingData(currentFilter)
  }, [currentFilter, fetchPendingData]);

  const handleSearch = value => {
    setSearchValue(value.toLowerCase());
  };

  const filteredData = () => {
    return data && data.filter(item => searchFilter(item, searchValue));
  };

  const handleDelete = id => { console.log('id:', id) };

  return (
    <div className="pending">
      <div className="pending__header">
        <PendingHeader currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} handleSearch={handleSearch} />
      </div>
      <CustomTable cols={tableConstants(handleDelete)} loading={loading} data={filteredData()} error={error} retry={() => fetchPendingData(currentFilter)} />
    </div>
  );
};

Pending.propTypes = {
  fetchPendingData: PropTypes.func,
  pending: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  pending: selectPending
});

const mapDispatchToProps = dispatch => ({
  fetchPendingData: category => dispatch(fetchPendingData(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(Pending);
