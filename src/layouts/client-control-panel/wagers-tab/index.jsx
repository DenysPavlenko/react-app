import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { clientWagersRequested } from 'redux/client-wagers/actions';
import { selectClientWagers } from 'redux/client-wagers/selectors';
// Components
import PrimaryTable from 'components/primary-table';
import Select from 'components/select';
import Search from 'components/search';
// Utils
import searchFilter from 'utils/search-filter';
// Table content
import tableContent from './table-content';
// Styles
import './styles.sass';

const WagersTab = ({ clientWagersRequested, clientWagers: { loading, data, error }, clientId }) => {
  const [filterDays, setFilterDays] = useState('7');
  const [searchValue, setSearchValue] = useState('');

  useLayoutEffect(() => {
    clientWagersRequested({ clientId, filterDays })
  }, [clientWagersRequested, clientId, filterDays]);

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
          retry={() => clientWagersRequested({ clientId, filterDays })}
        />
      </div>
    </div>
  );
};

WagersTab.propTypes = {
  clientWagersRequested: PropTypes.func,
  clientWagers: PropTypes.object,
  clientId: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  clientWagers: selectClientWagers
});

const mapDispatchToProps = {
  clientWagersRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(WagersTab);
