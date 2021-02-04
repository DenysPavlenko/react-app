import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { fetchSettleData } from 'redux/settle/actions';
import { selectSettle } from 'redux/settle/selectors';
// Components
import SettleHeader from './settle-header';
import PrimaryTable from 'components/primary-table';
// Table content
import tableContent from './table-content';
// Styles
import './styles.sass';

const Settle = ({ fetchSettleData, settle: { loading, data, error } }) => {
  const [date, setDate] = useState('12/7/2020');

  useLayoutEffect(() => {
    fetchSettleData(date);
  }, [date, fetchSettleData]);

  return (
    <div className="settle">
      <div className="settle__header">
        <SettleHeader date={date} setDate={setDate} />
      </div>
      <div className="pending__table">
        <PrimaryTable
          cols={tableContent()}
          loading={loading}
          data={data}
          error={error}
          retry={() => fetchSettleData(date)}
        />
      </div>
    </div>
  );
};

Settle.propTypes = {
  fetchSettleData: PropTypes.func,
  settle: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  settle: selectSettle
});

const mapDispatchToProps = dispatch => ({
  fetchSettleData: date => dispatch(fetchSettleData(date))
});

export default connect(mapStateToProps, mapDispatchToProps)(Settle);
