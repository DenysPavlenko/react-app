import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchClientInternetLogData } from 'redux/client-internet-log/actions';
import { selectClientInternetLog } from 'redux/client-internet-log/selectors';
// Components
import DatePicker from 'components/date-picker';
import Button from 'components/button';
import PrimaryTable from 'components/primary-table';
// Table content
import tableContent from './table-content';
// Styles
import './styles.sass';

const InternetLogTab = ({ fetchClientInternetLogData, clientInternetLog: { loading, data, error }, clientId }) => {
  const [date, setDate] = useState({
    from: '2020-12-15',
    to: '2020-12-31',
  });

  useLayoutEffect(() => {
    fetchClientInternetLogData(clientId, '');
  }, [clientId, fetchClientInternetLogData]);

  const handleDateSet = ({ target: { name, value } }) => {
    setDate(date => ({
      ...date,
      [name]: value
    }));
  };

  const handleDataLoad = () => fetchClientInternetLogData(clientId, date);

  return (
    <div className="internet-log-tab">
      <div className="internet-log-tab__header">
        <div className="internet-log-tab__header-item">
          <DatePicker name="from" value={date.from} onChange={handleDateSet} variant="primary" />
        </div>
        <div className="internet-log-tab__header-item">
          <DatePicker name="to" value={date.to} onChange={handleDateSet} variant="primary" />
        </div>
        <div className="internet-log-tab__header-item">
          <Button variant="default" onClick={handleDataLoad}>Load</Button>
        </div>
      </div>
      <div className="internet-log-tab__table">
        <PrimaryTable
          cols={tableContent()}
          loading={loading}
          data={data}
          error={error}
          retry={() => fetchClientInternetLogData(clientId, date)}
        />
      </div>
    </div>
  );
};

InternetLogTab.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(InternetLogTab);
