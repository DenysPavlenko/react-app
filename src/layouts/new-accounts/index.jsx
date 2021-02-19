import React, { Fragment, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { newAccountsRequested } from 'redux/new-accounts/actions';
import { selectNewAccounts } from 'redux/new-accounts/selectors';
// Components
import PageHeader from 'components/page-header';
import Typography from 'components/typography';
import ErrorIndicator from 'components/error-indicator';
import Spinner from 'components/spinner/spinner';
import Accordion from 'components/accordion';
import AccordionTab from 'components/accordion-tab';
import CreateAccounts from 'parts/create-accounts';
// Styles
import './styles.sass';

const NewAccounts = ({ newAccountsRequested, newAccounts: { loading, data, error } }) => {
  const [expanded, setExpanded] = useState(0);

  const handleChange = idx => {
    setExpanded(idx);
  };

  useLayoutEffect(() => {
    newAccountsRequested();
  }, [newAccountsRequested]);

  return (
    <div className="new-accounts">
      <div className="new-accounts__header">
        <PageHeader
          left={<Typography component="h2">New Accounts</Typography>}
        />
      </div>
      <div className="new-accounts__content">
        {error && <ErrorIndicator retry={newAccountsRequested} light />}
        {(!error && loading) && <Spinner boxed light />}
        {(!error && !loading) &&
          <Fragment>
            {data.map(({ id, prefix, number }, idx) => (
              <Accordion key={id} className="new-accounts__item" expanded={expanded === idx} onChange={() => handleChange(idx)}>
                <Accordion.Toggle>
                  <AccordionTab title={id} isActive={expanded === idx} />
                </Accordion.Toggle>
                <Accordion.Content className="new-accounts__item-content">
                  <CreateAccounts prefix={prefix} number={number} variant="primary" />
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
  newAccountsRequested: PropTypes.func,
  newAccounts: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  newAccounts: selectNewAccounts
});

const mapDispatchToProps = {
  newAccountsRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(NewAccounts);
