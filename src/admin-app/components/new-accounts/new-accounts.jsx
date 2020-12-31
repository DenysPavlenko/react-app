import React, { Fragment, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchPendingData } from 'admin-app/redux/new-accounts/actions';
import { selectNewAccounts } from 'admin-app/redux/new-accounts/selectors';
// Components
import PageHeader from 'admin-app/components/page-header/page-header';
import Typography from 'shared/components/typography/typography';
import Button from 'shared/components/button/button';
import ErrorIndicator from 'shared/components/error-indicator/error-indicator';
import Spinner from 'shared/components/spinner/spinner';
import Accordion from 'shared/components/accordion/accordion';
import AccordionTab from 'shared/components/accordion-tab/accordion-tab';
import CreateAccounts from 'admin-app/components/create-accounts/create-accounts';
// Styles
import './new-accounts.sass';

const NewAccounts = ({ fetchPendingData, newAccounts: { loading, data, error } }) => {
  const [expanded, setExpanded] = useState(0);

  const handleChange = idx => {
    setExpanded(idx);
  };

  useLayoutEffect(() => {
    fetchPendingData();
  }, [fetchPendingData]);

  return (
    <div className="new-accounts">
      <div className="new-accounts__header">
        <PageHeader
          left={<Typography component="h2">New Accounts</Typography>}
          right={<Button variant="default" onClick={() => { }} >Submit</Button>}
        />
      </div>
      <div className="new-accounts__content">
        {error && <ErrorIndicator retry={fetchPendingData} light />}
        {(!error && loading) && <Spinner boxed light />}
        {(!error && !loading) &&
          <Fragment>
            {data.map(({ id, prefix, number }, idx) => (
              <Accordion key={id} className="new-accounts__item" expanded={expanded === idx} onChange={() => handleChange(idx)}>
                <Accordion.Toggle>
                  <AccordionTab title={id} isActive={false} variant="primary" />
                </Accordion.Toggle>
                <Accordion.Content className="new-accounts__item-content">
                  <CreateAccounts prefix={prefix} number={number} primary />
                </Accordion.Content>
              </Accordion>
            ))}
          </Fragment>
        }
      </div>
    </div>
  );
};

NewAccounts.propTypes = {
  fetchPendingData: PropTypes.func,
  newAccounts: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  newAccounts: selectNewAccounts
});

const mapDispatchToProps = dispatch => ({
  fetchPendingData: () => dispatch(fetchPendingData())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewAccounts);
