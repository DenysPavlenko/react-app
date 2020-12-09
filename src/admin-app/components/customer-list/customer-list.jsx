import React, { useLayoutEffect, Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// filter
import filtersData from './filters';
// Redux
import { fetchCustomerlistData } from 'admin-app/redux/customer-list/actions';
import { selectCustomerList } from 'admin-app/redux/customer-list/selectors';
// Components
import CustomerListHeader from './customer-list-header/customer-list-header';
import CustomerListTop from './customer-list-top/customer-list-top';
import CustomerListItem from './customer-list-item/customer-list-item';
import Table from 'shared/components/table/table';
import TableFilter from 'admin-app/components/table-filter/table-filter';
import ErrorIndicator from 'shared/components/error-indicator/error-indicator';
import Spinner from 'shared/components/spinner/spinner'
// Utils
import searchFilter from 'shared/utils/search-filter';
// Styles
import './customer-list.sass';

const CustomerList = ({ fetchCustomerlistData, customerList: { loading, data, error } }) => {
  const [isFilterShown, setIsFilterShown] = useState(false);
  const [filters, setFilters] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useLayoutEffect(() => {
    fetchCustomerlistData();
    setFilters(filtersData);
  }, [setFilters, fetchCustomerlistData]);

  const handleSearch = value => {
    setSearchValue(value.toLowerCase());
  };

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
  const tableTitles = checkedColumns.map(({ title }) => title);
  const tableItems = checkedColumns.map(({ id }) => id);

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
          <CustomerListHeader handleSettingsClick={handleFilterShow} handleSearch={handleSearch} />
        </div>
        <Table className="customer-list__table">
          <CustomerListTop titles={tableTitles} />
          <tbody>
            {error &&
              <tr>
                <th colSpan={checkedColumns.length}>
                  <ErrorIndicator retry={fetchCustomerlistData} light />
                </th>
              </tr>
            }
            {(!error && loading) &&
              <tr>
                <th colSpan={checkedColumns.length}>
                  <Spinner boxed light />
                </th>
              </tr>
            }
            {(!error && !loading) &&
              <Fragment>
                {data
                  .map((list) => {
                    let obj = {};
                    tableItems.forEach((item) => obj[item] = list[item]);
                    return obj;
                  })
                  .filter((list) => searchFilter(list, searchValue))
                  .map((list, idx) => (
                    <CustomerListItem key={idx} data={list} className="customer-list__item" />
                  ))}
              </Fragment>
            }
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
};

CustomerList.propTypes = {
  fetchCustomerlistData: PropTypes.func,
  recentLogins: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  customerList: selectCustomerList
});

const mapDispatchToProps = dispatch => ({
  fetchCustomerlistData: () => dispatch(fetchCustomerlistData())
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);
