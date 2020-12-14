import React, { useLayoutEffect, Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// filter
import filtersData from './filters';
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
// Styles
import './customer-list.sass';

const CustomerList = ({ fetchCustomerListData, customerList: { loading, data, error }, history }) => {
  const [isFilterShown, setIsFilterShown] = useState(false);
  const [filters, setFilters] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);

  useLayoutEffect(() => {
    fetchCustomerListData();
    setFilters(filtersData);
  }, [setFilters, fetchCustomerListData]);

  const handleSearch = value => {
    setSearchValue(value.toLowerCase());
  };

  const handlePageChange = page => setPage(page);

  const handleCheck = (name, checked) => {
    setFilters(filters => {
      const currentFilter = filters.find((filter) => filter.name === name);
      const updatedFilter = { ...currentFilter, checked };
      return filters.map((filter) => filter.name === name ? updatedFilter : filter);
    });
  };

  const handleFilterShow = () => setIsFilterShown(true);
  const handleFilterHide = () => setIsFilterShown(false);

  const checkedColumns = filters.filter(({ checked }) => checked).map(({ columns }) => columns).flat();
  const tableTitles = checkedColumns.map(({ title }) => title.toLowerCase());

  const filteredData = () => data && data.filter(item => searchFilter(item, searchValue));

  return (
    <Fragment>
      <TableFilter
        filters={filters}
        title="Columns: Turn on/off"
        isShown={isFilterShown}
        handleHide={handleFilterHide}
        handleCheck={handleCheck}
      />
      <div className="customer-list">
        <div className="customer-list__header">
          <CustomerListHeader
            handleSettingsClick={handleFilterShow}
            handleSearch={handleSearch}
            pages={10}
            page={page}
            handlePageChange={handlePageChange}
          />
        </div>
        <div className="customer-list__table">
          <PrimaryTable cols={tableContent(history, tableTitles)} loading={loading} data={filteredData()} error={error} retry={fetchCustomerListData} />
        </div>
        <div className="customer-list__footer">
          <Pagination pages={10} page={page} onChange={handlePageChange} />
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
