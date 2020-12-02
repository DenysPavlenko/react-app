import React, { useState } from 'react';
// Helpers
import isInputValid from 'helpers/is-input-valid';
// Components
import Form from 'components/form/form';
import Typography from 'components/typography/typography';
import Textarea from 'components/textarea/textarea';
import Input from 'components/input/input';
import Button from 'components/button/button';
import Notification from 'components/notification/notification';
// Styles
import './mail-new-message.sass';

const initialForm = {
  to: '',
  toInvalid: false,
  subject: '',
  subjectInvalid: false,
  message: '',
  messageInvalid: false,
  formErrors: false
};

const MessageNew = () => {
  const [data, setData] = useState(initialForm);
  const [showNotification, setShowNotification] = useState(false);

  const handleInput = ({ target: { name, type, value } }) => {
    setData(data => ({
      ...data,
      [name]: value,
      [`${name}Invalid`]: data.formErrors && !isInputValid(type, value),
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const toInvalid = !isInputValid('text', to);
    const subjectInvalid = !isInputValid('text', subject);
    const messageInvalid = !isInputValid('textarea', message);
    setData(data => ({
      ...data,
      toInvalid,
      subjectInvalid,
      messageInvalid,
      formErrors: toInvalid || subjectInvalid || messageInvalid
    }));
    if (!toInvalid && !subjectInvalid && !messageInvalid) {
      setShowNotification(true);
      setData(() => (initialForm));
    }
  };

  const { to, toInvalid, subject, subjectInvalid, message, messageInvalid } = data;

  return (
    <>
      <Form className="mail-new-message" onSubmit={handleSubmit}>
        <div className="mail-new-message__header">
          <div className="mail-new-message__header-line">
            <Typography component="p" className="mail-new-message__header-title">To:</Typography>
            <Input className="mail-new-message__header-input" value={to} isInvalid={toInvalid} name="to" type="text" onChange={handleInput} size="sm" fluid variant="primary-light" />
          </div>
          <div className="mail-new-message__header-line">
            <Typography component="p" className="mail-new-message__header-title">Subject:</Typography>
            <Input className="mail-new-message__header-input" value={subject} isInvalid={subjectInvalid} name="subject" type="text" onChange={handleInput} size="sm" fluid variant="primary-light" />
          </div>
        </div>
        <div className="mail-new-message__body">
          <Textarea rows={10} variant="primary-light" name="message" value={message} isInvalid={messageInvalid} onChange={handleInput} />
        </div>
        <div className="mail-new-message__footer">
          <Button variant="accent-blue" size="sm" type="submit">Send</Button>
        </div>
      </Form>
      <Notification
        show={showNotification}
        close={() => setShowNotification(false)}
        title="Congratulations"
        message="We are happy to inform you that your message was successfully sent."
      />
    </>
  );
};

export default MessageNew;
