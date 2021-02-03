import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchClientWagersData } from 'admin-app/redux/client-wagers/actions';
import { selectClientWagers } from 'admin-app/redux/client-wagers/selectors';
// Components
import PrimaryTable from 'shared/components/primary-table';
import Select from 'shared/components/select';
import Search from 'shared/components/search';
// Utils
import searchFilter from 'shared/utils/search-filter';
// Table content
import tableContent from './table-content';
// Styles
import './styles.sass';

const WagersTab = ({ fetchClientWagersData, clientWagers: { loading, data, error }, clientId }) => {
  const [filterDays, setFilterDays] = useState('7');
  const [searchValue, setSearchValue] = useState('');

  useLayoutEffect(() => {
    fetchClientWagersData(clientId, filterDays)
  }, [fetchClientWagersData, clientId, filterDays]);

  const handleSearch = value => {
    setSearchValue(value.toLowerCase());
  };

  const filteredData = () => data && data.filter(item => searchFilter(item, searchValue));

  return (
    <div className="wagers-tab">
      <div className="wagers-tab__header">
        <div className="wagers-tab__header-item">
          <Select
            value={filterDays}
            onChange={({ target: { value } }) => setFilterDays(value)}
            variant="primary"
            options={[
              { label: 'Last 7 days', value: '7' },
              { label: 'Last 30 days', value: '30' },
            ]}
          />
        </div>
        <div className="wagers-tab__header-item">
          <Search onChange={handleSearch} variant="primary" />
        </div>
      </div>
      <div className="wagers-tab__table">
        <PrimaryTable
          cols={tableContent()}
          loading={loading}
          data={filteredData()}
          error={error}
          retry={() => fetchClientWagersData(clientId)}
        />
      </div>
    </div>
  );
};

WagersTab.propTypes = {
  fetchClientWagersData: PropTypes.func,
  clientWagers: PropTypes.object,
  clientId: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  clientWagers: selectClientWagers
});

const mapDispatchToProps = dispatch => ({
  fetchClientWagersData: (clientId, filter) => dispatch(fetchClientWagersData(clientId, filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(WagersTab);
