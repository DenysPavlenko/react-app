import React, { useState } from 'react';
// Components
import Typography from 'components/typography/typography';
import Textarea from 'components/textarea/textarea';
import Input from 'components/input/input';
import Button from 'components/button/button';
// Styles
import './mail-new-message.sass';

const MessageNew = () => {
  const [data, setData] = useState({
    to: 'My agent',
    subject: '',
    message: ''
  });

  const handleInput = ({ target: { name, value } }) => {
    setData(data => {
      return {
        ...data,
        [name]: value,
      }
    })
  };

  return (
    <div className="mail-new-message">
      <div className="mail-new-message__header">
        <div className="mail-new-message__header-line">
          <Typography component="p" className="mail-new-message__header-title">To:</Typography>
          <Input className="mail-new-message__header-input" value={data.to} name="to" type="text" onChange={handleInput} size="sm" fluid variant="transparent" />
        </div>
        <div className="mail-new-message__header-line">
          <Typography component="p" className="mail-new-message__header-title">Subject:</Typography>
          <Input className="mail-new-message__header-input" value={data.subject} name="subject" type="text" onChange={handleInput} size="sm" fluid variant="transparent" />
        </div>
      </div>
      <div className="mail-new-message__body">
        <Textarea rows={10} variant="primary-light" name="message" value={data.message} onChange={handleInput} />
      </div>
      <div className="mail-new-message__footer">
        <Button variant="accent-blue" size="sm">Send</Button>
      </div>
    </div>
  );
};

export default MessageNew;
