import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchClientHistoryData } from 'admin-app/redux/client-history/actions';
import { selectClientHistory } from 'admin-app/redux/client-history/selectors';
// Components
import ButtonGroup from 'shared/components/button-group/button-group';
import Button from 'shared/components/button/button';
import PrimaryTable from 'shared/components/primary-table/primary-table';
// Table content
import tableContent from './table-content';
import tableFooter from './table-footer';
// Styles
import './client-control-history.sass';

const tabs = [
  { title: 'Football', value: 'football' },
  { title: 'Monthly', value: 'monthly' },
  { title: 'Yearly', value: 'yearly' },
];

const ClientControlHistory = ({ fetchClientHistoryData, clientHistory: { loading, data, error }, clientId }) => {
  const [category, setCategory] = useState('football');

  useLayoutEffect(() => {
    fetchClientHistoryData(clientId, category);
  }, [clientId, category, fetchClientHistoryData]);

  return (
    <div className="client-control-history">
      <div className="client-control-history__header">
        <ButtonGroup>
          {tabs.map(({ title, value }, idx) => (
            <Button key={idx} isActive={category === value} onClick={() => setCategory(value)} variant="alt-gray" size="lg">{title}</Button>
          ))}
        </ButtonGroup>
      </div>
      <div className="client-control-history__table">
        <PrimaryTable
          cols={tableContent(category)}
          footer={tableFooter(data, category)}
          loading={loading}
          data={data}
          error={error}
          retry={() => fetchClientHistoryData(clientId, category)}
          variant="primary"
        />
      </div>
    </div>
  );
};

ClientControlHistory.propTypes = {
  fetchClientHistoryData: PropTypes.func,
  clientHistory: PropTypes.object,
  clientId: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  clientHistory: selectClientHistory
});

const mapDispatchToProps = dispatch => ({
  fetchClientHistoryData: (clientId, category) => dispatch(fetchClientHistoryData(clientId, category))
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientControlHistory);