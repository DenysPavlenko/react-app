import React, { useState, useEffect, useRef } from 'react';
// Components
import Typography from 'components/typography/typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Textarea from 'components/textarea/textarea';
import Button from 'components/button/button';
// Styles
import './message-reply.sass';

const MessageReply = ({ to, handleReply }) => {
  const [value, setValue] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInput = ({ target: { value } }) => {
    setValue(value);
  };

  const handleSend = () => {
    setValue('');
    handleReply();
  };

  return (
    <div className="message-reply">
      <div className="message-reply__to">
        <FontAwesomeIcon icon="share" className="message-reply__to-icon" />
        <Typography>{to}</Typography>
      </div>
      <div className="message-reply__body">
        <Textarea ref={inputRef} rows="5" value={value} onChange={handleInput} variant="transparent" noPadding />
      </div>
      <div className="message-reply__footer">
        <Button variant="accent-blue" size="sm" onClick={handleSend}>Send</Button>
      </div>
    </div>
  )
};

export default MessageReply;
