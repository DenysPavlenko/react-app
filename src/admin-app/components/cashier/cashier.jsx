import React, { Fragment, useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchCashierData } from 'admin-app/redux/cashier/actions';
import { selectCashier } from 'admin-app/redux/cashier/selectors';
// Components
import CashierHeader from './cashier-header/cashier-header';
import ErrorIndicator from 'shared/components/error-indicator/error-indicator';
import Spinner from 'shared/components/spinner/spinner';
import Accordion from 'shared/components/accordion/accordion';
import AccordionTab from 'shared/components/accordion-tab/accordion-tab';
import PrimaryTable from 'shared/components/primary-table/primary-table';
import DeleteConfirmation from 'shared/components/delete-confirmation/delete-confirmation';
// Table content
import tableContent from './table-content';
// Styles
import './cashier.sass';

const Cashier = ({ fetchCashierData, cashier: { loading, data, error } }) => {
  const [expanded, setExpanded] = useState(0);
  const [status, setStatus] = useState('active');
  const [inputs, setInputs] = useState(null);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleChange = idx => setExpanded(idx);

  const handleInput = (id, { target: { name, value } }) => {
    setInputs(inputs => {
      const newObj = { ...inputs[id], [name]: value };
      return { ...inputs, [id]: newObj };
    });
  };

  useLayoutEffect(() => {
    fetchCashierData(status);
  }, [fetchCashierData, status]);

  useEffect(() => {
    if (!data) { return; }
    const res = {};
    data.forEach(({ accounts }) => {
      accounts.forEach(({ id, transType, description, notes }) => {
        res[id] = { transType, description, notes };
      });
    });
    setInputs(res);
  }, [data]);

  const handleDeleteClick = id => { setDeleteOpen(true) }
  const handleDelete = () => { };

  return (
    <Fragment>
      <DeleteConfirmation
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={handleDelete}
        text="Are you sure do you want to delete this transaction?"
      />
      <div className="cashier">
        <div className="cashier__header">
          <CashierHeader status={status} setStatus={setStatus} />
        </div>
        <div className="cashier__content">
          {error && <ErrorIndicator retry={fetchCashierData} light />}
          {(!error && loading) && <Spinner boxed light />}
          {(!error && !loading) &&
            <Fragment>
              {inputs && data.map(({ id, name, accounts }, idx) => (
                <Accordion key={id} className="new-accounts__item" expanded={expanded === idx} onChange={() => handleChange(idx)}>
                  <Accordion.Toggle>
                    <AccordionTab title={name} isActive={false} variant="primary" />
                  </Accordion.Toggle>
                  <Accordion.Content className="new-accounts__item-content">
                    <PrimaryTable
                      variant="primary"
                      key={id}
                      cols={tableContent(inputs, handleInput, handleDeleteClick)}
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
  fetchCashierData: PropTypes.func,
  selectCashier: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  cashier: selectCashier
});

const mapDispatchToProps = dispatch => ({
  fetchCashierData: status => dispatch(fetchCashierData(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cashier);
