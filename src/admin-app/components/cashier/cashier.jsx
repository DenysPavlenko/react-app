import React, { Fragment, useLayoutEffect, useState } from 'react';
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
// Table content
import tableContent from './table-content';
// Styles
import './cashier.sass';

const Cashier = ({ fetchCashierData, cashier: { loading, data, error } }) => {
  const [expanded, setExpanded] = useState(0);
  const [status, setStatus] = useState('active');

  const handleChange = idx => setExpanded(idx);

  useLayoutEffect(() => {
    fetchCashierData(status);
  }, [fetchCashierData, status]);

  return (
    <div className="cashier">
      <div className="cashier__header">
        <CashierHeader status={status} setStatus={setStatus} />
      </div>
      <div className="cashier__content">
        {error && <ErrorIndicator retry={fetchCashierData} light />}
        {(!error && loading) && <Spinner boxed light />}
        {(!error && !loading) &&
          <Fragment>
            {data.map(({ id, name, accounts }, idx) => (
              <Accordion key={id} className="new-accounts__item" expanded={expanded === idx} onChange={() => handleChange(idx)}>
                <Accordion.Toggle>
                  <AccordionTab title={name} isActive={false} variant="primary" />
                </Accordion.Toggle>
                <Accordion.Content className="new-accounts__item-content">
                  <PrimaryTable
                    size="sm"
                    variant="primary"
                    key={id}
                    cols={tableContent()}
                    data={accounts}
                  />
                </Accordion.Content>
              </Accordion>
            ))}
          </Fragment>
        }
      </div>
    </div>
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
