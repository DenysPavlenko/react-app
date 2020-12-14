import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { fetchSettleData } from 'admin-app/redux/settle/actions';
import { selectSettle } from 'admin-app/redux/settle/selectors';
// Components
import SettleHeader from './settle-header/settle-header';
import PrimaryTable from 'shared/components/primary-table/primary-table';
// Table content
import tableConstants from './table-constants';
// Styles
import './settle.sass';

const Settle = ({ fetchSettleData, settle: { loading, data, error } }) => {
  const [currentFilter, setCurrentFilter] = useState('12/7/2020');

  useLayoutEffect(() => {
    fetchSettleData(currentFilter);
  }, [currentFilter, fetchSettleData]);

  return (
    <div className="settle">
      <div className="settle__header">
        <SettleHeader currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} />
      </div>
      <div className="pending__table">
        <PrimaryTable cols={tableConstants()} loading={loading} data={data} error={error} retry={() => fetchSettleData(currentFilter)} />
      </div>
    </div>
  );
};

Settle.propTypes = {
  fetchSettleData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  settle: selectSettle
});

const mapDispatchToProps = dispatch => ({
  fetchSettleData: category => dispatch(fetchSettleData(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(Settle);
