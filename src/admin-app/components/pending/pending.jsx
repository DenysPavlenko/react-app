import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchPendingData } from 'admin-app/redux/pending/actions';
import { selectPending } from 'admin-app/redux/pending/selectors';
// Components
import Pagination from 'shared/components/pagination/pagination';
import PendingHeader from './pending-header/pending-header';
import PrimaryTable from 'shared/components/primary-table/primary-table';
// Table content
import tableContent from './table-content';
// Utils
import searchFilter from 'shared/utils/search-filter';
// Styles
import './pending.sass';

const Pending = ({ fetchPendingData, pending: { loading, data, error } }) => {
  const [currentFilter, setCurrentFilter] = useState('games');
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);

  const onPageChange = page => setPage(page);

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
      <div className="pending__table">
        <PrimaryTable
          cols={tableContent(handleDelete)}
          loading={loading}
          data={filteredData()}
          error={error}
          retry={() => fetchPendingData(currentFilter)}
          variant="primary"
        />
      </div>
      <div className="pending__footer">
        <Pagination pages={10} page={page} onChange={onPageChange} />
      </div>
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
