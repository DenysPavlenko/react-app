import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { settleRequested } from 'redux/settle/actions';
import { selectSettle } from 'redux/settle/selectors';
// Components
import SettleHeader from './settle-header';
import PrimaryTable from 'components/primary-table';
// Table content
import tableContent from './table-content';
// Styles
import './styles.sass';

const Settle = ({ settleRequested, settle: { loading, data, error } }) => {
  const [date, setDate] = useState('12/7/2020');

  useLayoutEffect(() => {
    settleRequested(date);
  }, [date, settleRequested]);

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
          retry={() => settleRequested(date)}
        />
      </div>
    </div>
  );
};

Settle.propTypes = {
  settleRequested: PropTypes.func,
  settle: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  settle: selectSettle
});

const mapDispatchToProps = {
  settleRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(Settle);
