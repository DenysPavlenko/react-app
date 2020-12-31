import React, { useLayoutEffect, Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchCustomerListData } from 'admin-app/redux/customer-list/actions';
import { selectCustomerList } from 'admin-app/redux/customer-list/selectors';
// Components
import CustomerListHeader from './customer-list-header/customer-list-header';
import TableFilter from 'admin-app/components/table-filter/table-filter';
import PrimaryTable from 'shared/components/primary-table/primary-table';
import Pagination from 'shared/components/pagination/pagination';
// Utils
import searchFilter from 'shared/utils/search-filter';
// Table content
import tableContent from './table-content';
// Filters
import filtersData from './filters-data';
// Styles
import './customer-list.sass';

const CustomerList = ({ fetchCustomerListData, customerList: { loading, data, error }, history }) => {
  const [isFilterShown, setIsFilterShown] = useState(false);
  const [filters, setFilters] = useState(filtersData);
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);

  useLayoutEffect(() => {
    fetchCustomerListData();
  }, [setFilters, fetchCustomerListData]);

  const handleSearch = value => {
    setSearchValue(value.toLowerCase());
  };

  const handleCheck = ({ target: { name, checked } }) => {
    setFilters(filters => {
      const currentFilter = filters.find((filter) => filter.name === name);
      const updatedFilter = { ...currentFilter, checked };
      return filters.map((filter) => filter.name === name ? updatedFilter : filter);
    });
  };

  const filteredData = () => data && data.filter(item => searchFilter(item, searchValue));

  return (
    <Fragment>
      <TableFilter
        title="Columns: Turn on/off"
        filters={filters}
        isShown={isFilterShown}
        handleHide={() => setIsFilterShown(false)}
        handleCheck={handleCheck}
      />
      <div className="customer-list">
        <div className="customer-list__header">
          <CustomerListHeader
            handleSettingsClick={() => setIsFilterShown(true)}
            handleSearch={handleSearch}
          />
        </div>
        <div className="customer-list__table">
          <PrimaryTable
            cols={tableContent(history)}
            loading={loading}
            data={filteredData()}
            error={error}
            retry={fetchCustomerListData}
            bordered
          />
        </div>
        <div className="customer-list__footer">
          <Pagination pages={10} page={page} onChange={setPage} />
        </div>
      </div>
    </Fragment>
  );
};

CustomerList.propTypes = {
  fetchCustomerListData: PropTypes.func,
  recentLogins: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  customerList: selectCustomerList
});

const mapDispatchToProps = dispatch => ({
  fetchCustomerListData: () => dispatch(fetchCustomerListData())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CustomerList));
