import React, { Fragment, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { figuresRequested } from 'redux/figures/actions';
import { selectFigures } from 'redux/figures/selectors';
// Components
import FiguresHeader from './figures-header';
import PrimaryTable from 'components/primary-table';
import TableFilter from 'parts/table-filter';
import Typography from 'components/typography';
import Spinner from 'components/spinner/spinner';
import ErrorIndicator from 'components/error-indicator';
import ActiveCustomers from 'parts/active-customers';
import AccountActivity from 'parts/account-activity';
import Transactions from 'parts/transactions';
// Table content
import tableContent from './table-content';
import tableLastRow from './table-last-row';
// Filters
import filtersData from './filters-data';
// Styles
import './styles.sass';

const Figures = ({ figuresRequested, figures: { loading, data, error }, history }) => {
  const [date, setDate] = useState('12/7/2020');
  const [status, setStatus] = useState('all');
  const [filters, setFilters] = useState(filtersData);
  const [isFilterShown, setIsFilterShown] = useState(false);
  const [modals, setModals] = useState({
    acModal: { open: false, agent: '' },
    aaModal: { open: false, agent: '', date: '' },
    trModal: { open: false, agent: '' },
  });

  useLayoutEffect(() => {
    figuresRequested({ date, status });
  }, [figuresRequested, date, status]);

  const handleCheck = ({ target: { name, checked } }) => {
    setFilters(filters => {
      const currentFilter = filters.find((filter) => filter.name === name);
      const updatedFilter = { ...currentFilter, checked };
      return filters.map((filter) => filter.name === name ? updatedFilter : filter);
    });
  };

  const handleModalOpen = (modal, { agent, date }) => {
    setModals(modals => {
      const newModal = { ...modals[modal], agent, date, open: true }
      return { ...modals, [modal]: newModal }
    });
  };

  const handleModalClose = (modal) => {
    setModals(modals => {
      const newModal = { ...modals[modal], open: false }
      return { ...modals, [modal]: newModal }
    });
  };

  const handleModalClear = (modal) => {
    setModals(modals => {
      const newModal = { ...modals[modal], agent: '', date: '' }
      return { ...modals, [modal]: newModal }
    });
  };

  const { acModal, aaModal, trModal } = modals;

  return (
    <Fragment>
      <ActiveCustomers
        open={acModal.open}
        agent={acModal.agent}
        onClose={() => handleModalClose('acModal')}
        onExited={() => handleModalClear('acModal')}
      />
      <AccountActivity
        open={aaModal.open}
        agent={aaModal.agent}
        onClose={() => handleModalClose('aaModal')}
        onExited={() => handleModalClear('aaModal')}
      />
      <Transactions
        open={trModal.open}
        agent={trModal.agent}
        onClose={() => handleModalClose('trModal')}
        onExited={() => handleModalClear('trModal')}
      />
      <TableFilter title="Columns: Turn on/off"
        filters={filters}
        isShown={isFilterShown}
        handleHide={() => setIsFilterShown(false)}
        handleCheck={handleCheck}
      />
      <div className="figures">
        <div className="figures__header">
          <FiguresHeader
            date={date}
            setDate={setDate}
            status={status}
            setStatus={setStatus}
            showFilters={() => setIsFilterShown(true)}
          />
        </div>
        <div className="figures__tables">
          {error && <ErrorIndicator light retry={() => figuresRequested({ date, status })} />}
          {(!error && loading) && <Spinner boxed light />}
          {(!error && !loading) &&
            <Fragment>
              {data.map(({ id, agent, customers, accounts }) => (
                <div key={id} className="figures__table">
                  <Typography component="h3" className="figures__table-title">{agent}</Typography>
                  <PrimaryTable
                    cols={tableContent(history, agent, handleModalOpen)}
                    lastRow={tableLastRow(accounts, agent, customers, handleModalOpen)}
                    data={accounts}
                    retry={() => figuresRequested({ date, status })}
                  />
                </div>
              ))}
            </Fragment>
          }
        </div>
      </div>
    </Fragment>
  );
};

Figures.propTypes = {
  figuresRequested: PropTypes.func,
  figures: PropTypes.object,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  figures: selectFigures
});

const mapDispatchToProps = {
  figuresRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Figures));
