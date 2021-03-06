import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { clientHistoryRequested } from 'redux/client-history/actions';
import { selectClientHistory } from 'redux/client-history/selectors';
// Components
import ButtonGroup from 'components/button-group';
import Button from 'components/button';
import PrimaryTable from 'components/primary-table';
// Table content
import tableContent from './table-content';
import tableLastRow from './table-last-row';
// Styles
import './styles.sass';

const tabs = [
  { title: 'Football', value: 'football' },
  { title: 'Monthly', value: 'monthly' },
  { title: 'Yearly', value: 'yearly' },
];

const HistoryTab = ({ clientHistoryRequested, clientHistory: { loading, data, error }, clientId }) => {
  const [category, setCategory] = useState('football');

  useLayoutEffect(() => {
    clientHistoryRequested({ clientId, category });
  }, [clientId, category, clientHistoryRequested]);

  return (
    <div className="history-tab">
      <div className="history-tab__header">
        <ButtonGroup>
          {tabs.map(({ title, value }, idx) => (
            <Button key={idx} isActive={category === value} onClick={() => setCategory(value)} variant="default">{title}</Button>
          ))}
        </ButtonGroup>
      </div>
      <div className="history-tab__table">
        <PrimaryTable
          cols={tableContent(category)}
          lastRow={tableLastRow(data, category)}
          loading={loading}
          data={data}
          error={error}
          retry={() => clientHistoryRequested({ clientId, category })}
        />
      </div>
    </div>
  );
};

HistoryTab.propTypes = {
  clientHistoryRequested: PropTypes.func,
  clientHistory: PropTypes.object,
  clientId: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  clientHistory: selectClientHistory
});

const mapDispatchToProps = {
  clientHistoryRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryTab);
