import React, { useLayoutEffect, Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchCustomerListData } from 'redux/customer-list/actions';
import { selectCustomerList } from 'redux/customer-list/selectors';
// Components
import CustomerListHeader from './customer-list-header';
import PrimaryTable from 'components/primary-table';
// Utils
import searchFilter from 'utils/search-filter';
// Table content
import tableContent from './table-content';
// Styles
import './styles.sass';

const CustomerList = ({ fetchCustomerListData, customerList: { loading, data, error }, history }) => {
  const [searchValue, setSearchValue] = useState('');

  useLayoutEffect(() => {
    fetchCustomerListData();
  }, [fetchCustomerListData]);

  const handleSearch = value => {
    setSearchValue(value.toLowerCase());
  };

  const filteredData = () => data && data.filter(item => searchFilter(item, searchValue));

  return (
    <Fragment>
      <div className="customer-list">
        <div className="customer-list__header">
          <CustomerListHeader
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
