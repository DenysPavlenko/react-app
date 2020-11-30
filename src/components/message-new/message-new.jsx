import React from 'react';
// Components
import Typography from 'components/typography/typography';
import Textarea from 'components/textarea/textarea';
import Input from 'components/input/input';
import Button from 'components/button/button';
// Styles
import './message-new.sass';

const MessageNew = () => {
  return (
    <div className="message-new">
      <div className="message-new__header">
        <div className="message-new__header-line">
          <Typography component="p" className="message-new__header-title">To:</Typography>
          <Input className="message-new__header-input" value="My agent" type="text" onChange={() => { }} size="sm" fluid variant="transparent" />
        </div>
        <div className="message-new__header-line">
          <Typography component="p" className="message-new__header-title">Subject:</Typography>
          <Input className="message-new__header-input" value="" type="text" onChange={() => { }} size="sm" fluid variant="transparent" />
        </div>
      </div>
      <div className="message-new__body">
        <Textarea rows={10} variant="primary-light" />
      </div>
      <div className="message-new__footer">
        <Button variant="accent-blue" size="sm">Send</Button>
      </div>
    </div>
  );
};

export default MessageNew;
