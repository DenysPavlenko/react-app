import React, { Fragment, useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { cashierRequested } from 'redux/cashier/actions';
import { selectCashier } from 'redux/cashier/selectors';
// Components
import ErrorIndicator from 'components/error-indicator';
import Spinner from 'components/spinner/spinner';
import Accordion from 'components/accordion';
import AccordionTab from 'components/accordion-tab';
import PrimaryTable from 'components/primary-table';
import DeleteConfirmation from 'parts/delete-confirmation';
import TransactionSummary from 'parts/transaction-summary';
import PageHeader from 'components/page-header';
import Typography from 'components/typography';
// Table content
import tableContent from './table-content';
// Styles
import './styles.sass';

const Cashier = ({ cashierRequested, cashier: { loading, data, error } }) => {
  const [expanded, setExpanded] = useState(0);
  const [selects, setSelects] = useState(null);
  const [idToDelete, setIdToDelete] = useState(null);
  const [transSummary, setTransSummary] = useState(null);

  useLayoutEffect(() => {
    cashierRequested();
  }, [cashierRequested]);

  useEffect(() => {
    if (!data) { return; }
    const res = {};
    data.forEach(({ accounts }) => {
      accounts.forEach(({ id, transType, description, notes }) => {
        res[id] = { transType, description, notes };
      });
    });
    setSelects(res);
  }, [data]);

  const handleChange = idx => setExpanded(idx);

  const handleSelect = (id, { target: { name, value } }) => {
    setSelects(selects => {
      const newObj = { ...selects[id], [name]: value };
      return { ...selects, [id]: newObj };
    });
  };

  const handleTransSummary = id => setTransSummary({
    id,
    balance: '-261.00',
    deposit: '20.00',
    newBalance: '0.00'
  });

  const handleDeleteClick = id => { setIdToDelete(id) };
  const handleDelete = () => { };

  return (
    <Fragment>
      <TransactionSummary
        open={!!transSummary}
        onClose={() => setTransSummary(false)}
        {...transSummary}
      />
      <DeleteConfirmation
        open={!!idToDelete}
        onClose={() => setIdToDelete(null)}
        onConfirm={handleDelete}
        text="Are you sure do you want to delete this transaction?"
      />
      <div className="cashier">
        <div className="cashier__header">
          <PageHeader left={<Typography component="h2">Cashier</Typography>} />
        </div>
        <div className="cashier__content">
          {error && <ErrorIndicator retry={cashierRequested} light />}
          {(!error && loading) && <Spinner boxed light />}
          {(!error && !loading) &&
            <Fragment>
              {selects && data.map(({ id, name, accounts }, idx) => (
                <Accordion key={id} className="new-accounts__item" expanded={expanded === idx} onChange={() => handleChange(idx)}>
                  <Accordion.Toggle>
                    <AccordionTab title={name} isActive={expanded === idx} />
                  </Accordion.Toggle>
                  <Accordion.Content className="new-accounts__item-content">
                    <PrimaryTable
                      key={id}
                      cols={tableContent({ selects, handleSelect, handleDeleteClick, handleTransSummary })}
                      data={accounts}
                    />
                  </Accordion.Content>
                </Accordion>
              ))}
            </Fragment>
          }
        </div>
      </div>
    </Fragment>
  );
};

Cashier.propTypes = {
  cashierRequested: PropTypes.func,
  selectCashier: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  cashier: selectCashier
});

const mapDispatchToProps = {
  cashierRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(Cashier);
