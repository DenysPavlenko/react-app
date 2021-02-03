import React, { useState, useEffect, useRef } from 'react';
// Components
import Typography from 'shared/components/typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Textarea from 'shared/components/textarea';
import Button from 'shared/components/button';
// Styles
import './styles.sass';

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
    <div className="mail-reply">
      <div className="mail-reply__to">
        <FontAwesomeIcon icon="share" className="mail-reply__to-icon" />
        <Typography>{to}</Typography>
      </div>
      <div className="mail-reply__body">
        <Textarea ref={inputRef} rows="5" value={value} onChange={handleInput} variant="transparent" noPadding />
      </div>
      <div className="mail-reply__footer">
        <Button variant="accent-blue" size="sm" onClick={handleSend}>Send</Button>
      </div>
    </div>
  )
};

export default MessageReply;
