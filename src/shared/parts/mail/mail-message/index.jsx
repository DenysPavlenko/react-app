import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Redux
import { deleteMessage } from 'shared/redux/mail/actions';
// Components
import Typography from 'shared/components/typography';
import MailReply from '../mail-reply';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './styles.sass';

const MailMessage = ({ id, date, from, to, text, subject, handleClose, deleteMessage }) => {
  const [reply, setReply] = useState(false);

  const handleDelete = () => {
    deleteMessage(id);
    handleClose();
  };

  const handleReply = () => {
    setReply(false);
  };

  return (
    <div className="mail-message">
      <div className="mail-message__actions">
        <div className="mail-message__action" onClick={handleClose}>
          <FontAwesomeIcon icon="arrow-left" />
        </div>
        <div className="mail-message__action" onClick={handleDelete}>
          <FontAwesomeIcon icon="trash" />
        </div>
        <div className="mail-message__action" onClick={() => setReply(true)} >
          <FontAwesomeIcon icon="share" />
        </div>
      </div>
      <div className="mail-message__header">
        <div className="mail-message__header-letter">A</div>
        <div className="mail-message__header-info">
          <Typography component="p" className="mail-message__header-from">From: <span>{from}</span></Typography>
          <Typography component="p" className="mail-message__header-to">To: {to}</Typography>
          <Typography component="p" variant="p-xs" className="mail-message__header-date">{date}</Typography>
        </div>
      </div>
      <div className="mail-message__body">
        <Typography component="h4" className="mail-message__subject weight-bold">{subject}</Typography>
        <Typography component="p" className="mail-message__text">{text}</Typography>
      </div>

      {reply && <MailReply to={from} handleReply={handleReply} />}

    </div>
  );
};

MailMessage.propTypes = {
  deleteMessage: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  deleteMessage: (id) => dispatch(deleteMessage(id)),
});

export default connect(null, mapDispatchToProps)(MailMessage);
