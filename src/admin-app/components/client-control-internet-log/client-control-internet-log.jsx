import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchClientInternetLogData } from 'admin-app/redux/client-internet-log/actions';
import { selectClientInternetLog } from 'admin-app/redux/client-internet-log/selectors';
// Components
import DatePicker from 'shared/components/date-picker/date-picker';
import Button from 'shared/components/button/button';
import PrimaryTable from 'shared/components/primary-table/primary-table';
// Table content
import tableContent from './table-content';
// Styles
import './client-control-internet-log.sass';

const ClientControlInternetLog = ({ fetchClientInternetLogData, clientInternetLog: { loading, data, error }, clientId }) => {
  const [date, setDate] = useState({
    from: '2020-12-15',
    to: '2020-12-31',
  });

  useLayoutEffect(() => {
    fetchClientInternetLogData(clientId, '');
  }, [clientId, fetchClientInternetLogData]);

  const handleDateSet = (newDate, name) => {
    setDate(date => ({
      ...date,
      [name]: newDate
    }));
  };

  const handleDataLoad = () => fetchClientInternetLogData(clientId, date);

  return (
    <div className="client-control-internet-log">
      <div className="client-control-internet-log__header">
        <div className="client-control-internet-log__header-item">
          <DatePicker date={date.from} setDate={(date) => handleDateSet(date, 'from')} variant="primary" />
        </div>
        <div className="client-control-internet-log__header-item">
          <DatePicker date={date.to} setDate={(date) => handleDateSet(date, 'to')} variant="primary" />
        </div>
        <div className="client-control-internet-log__header-item">
          <Button variant="accent-blue" onClick={handleDataLoad}>Load</Button>
        </div>
      </div>
      <div className="client-control-internet-log__table">
        <PrimaryTable
          cols={tableContent()}
          loading={loading}
          data={data}
          error={error}
          retry={() => fetchClientInternetLogData(clientId, date)}
          variant="primary"
        />
      </div>
    </div>
  );
};

ClientControlInternetLog.propTypes = {
  fetchClientInternetLogData: PropTypes.func,
  clientInternetLog: PropTypes.object,
  clientId: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  clientInternetLog: selectClientInternetLog
});

const mapDispatchToProps = dispatch => ({
  fetchClientInternetLogData: (clientId, date) => dispatch(fetchClientInternetLogData(clientId, date))
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientControlInternetLog);
