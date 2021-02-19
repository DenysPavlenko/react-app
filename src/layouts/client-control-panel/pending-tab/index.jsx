import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { clientPendingRequested } from 'redux/client-pending/actions';
import { selectClientPending } from 'redux/client-pending/selectors';
// Components
import PrimaryTable from 'components/primary-table';
import Search from 'components/search';
// Table content
import tableContent from './table-content';
// Utils
import searchFilter from 'utils/search-filter';
// Styles
import './styles.sass';

const PendingTab = ({ clientPendingRequested, clientPending: { loading, data, error }, clientId }) => {
  const [searchValue, setSearchValue] = useState('');

  useLayoutEffect(() => {
    clientPendingRequested(clientId)
  }, [clientId, clientPendingRequested]);

  const filteredData = () => data && data.filter(item => searchFilter(item, searchValue));

  const handleSearch = value => {
    setSearchValue(value.toLowerCase());
  };

  return (
    <div className="pending-tab">
      <div className="pending-tab__search">
        <Search onChange={handleSearch} variant="primary" />
      </div>
      <div className="pending-tab__table">
        <PrimaryTable
          cols={tableContent()}
          loading={loading}
          data={filteredData()}
          error={error}
          retry={() => clientPendingRequested(clientId)}
        />
      </div>
    </div>
  );
};

PendingTab.propTypes = {
  clientPendingRequested: PropTypes.func,
  clientPending: PropTypes.object,
  clientId: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  clientPending: selectClientPending
});

const mapDispatchToProps = {
  clientPendingRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(PendingTab);
