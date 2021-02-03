import React, { useState } from 'react';
// Components
import Form from 'shared/components/form';
import FormGroup from 'shared/components/form-group';
import Textarea from 'shared/components/textarea';
import Button from 'shared/components/button';
// Styles
import './styles.sass';

const NotificationsTab = () => {
  const [clientData, setClientData] = useState({
    notifications: '',
    privateNotes: '',
  });

  const handleInput = ({ target: { name, value } }) => {
    setClientData(data => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Form className="notifications-tab" onSubmit={handleSubmit}>
      <div className="notifications-tab__wrap">
        <div className="notifications-tab__left">
          <FormGroup label="Notifications: (Customer see this on the internet)">
            <Textarea rows="12" onChange={handleInput} name="notifications" variant="primary" value={clientData.notifications} />
          </FormGroup>
        </div>
        <div className="notifications-tab__right">
          <FormGroup label="Private Notes: (Customers do not see this)">
            <Textarea rows="12" onChange={handleInput} name="privateNotes" variant="primary" value={clientData.privateNotes} />
          </FormGroup>
        </div>
      </div>
      <div className="notifications-tab__footer">
        <Button variant="accent-blue" type="submit">Submit</Button>
      </div>
    </Form>
  );
};

export default NotificationsTab;
