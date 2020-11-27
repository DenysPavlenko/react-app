import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { fetchInbox } from 'redux/mail/actions';
import { selectMailInbox } from 'redux/mail/selectors';
// Component
import Spinner from 'components/spinner/spinner';
import ErrorIndicator from 'components/error-indicator/error-indicator';
import MailItem from 'components/mail-item/mail-item';
// Styles
import './mail-inbox.sass';

const MailInbox = ({ fetchInbox, mailInbox: { loading, data, error } }) => {

  useEffect(() => {
    fetchInbox();
  }, [fetchInbox]);

  return (
    <div className="mail-inbox">
      {error && <ErrorIndicator retry={fetchInbox} light />}
      {(!error && loading) && <Spinner light boxed />}
      {(!error && !loading) &&
        <div className="mail-inbox__items">
          {data.map(({ id, date, from, to, text }) => (
            <MailItem key={id} className="mail-inbox__item" id={id} date={date} from={from} to={to} text={text} />
          ))}
        </div>
      }
    </div>
  );
};


MailInbox.propTypes = {
  fetchInbox: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  mailInbox: selectMailInbox,
});

const mapDispatchToProps = dispatch => ({
  fetchInbox: () => dispatch(fetchInbox()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MailInbox);
