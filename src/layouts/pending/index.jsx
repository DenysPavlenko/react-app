import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { pendingRequested } from 'redux/pending/actions';
import { selectPending } from 'redux/pending/selectors';
// Components
import PendingHeader from './pending-header';
import PrimaryTable from 'components/primary-table';
// Table content
import tableContent from './table-content';
// Utils
import searchFilter from 'utils/search-filter';
// Styles
import './styles.sass';

const Pending = ({ pendingRequested, pending: { loading, data, error } }) => {
  const [currentFilter, setCurrentFilter] = useState('games');
  const [searchValue, setSearchValue] = useState('');

  useLayoutEffect(() => {
    pendingRequested(currentFilter)
  }, [currentFilter, pendingRequested]);

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
          retry={() => pendingRequested(currentFilter)}
        />
      </div>
    </div>
  );
};

Pending.propTypes = {
  pendingRequested: PropTypes.func,
  pending: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  pending: selectPending
});

const mapDispatchToProps = {
  pendingRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(Pending);
