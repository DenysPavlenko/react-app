import React, { useState } from 'react';
// Components
import Form from 'shared/components/form/form';
import FormGroup from 'shared/components/form-group/form-group';
import Textarea from 'shared/components/textarea/textarea';
import Button from 'shared/components/button/button';
// Styles
import './client-control-notification.sass';

const ClientControlNotifications = () => {
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
    <Form className="client-control-notifications" onSubmit={handleSubmit}>
      <div className="client-control-notifications__wrap">
        <div className="client-control-notifications__left">
          <FormGroup label="Notifications: (Customer see this on the internet)">
            <Textarea rows="12" onChange={handleInput} name="notifications" variant="primary" value={clientData.notifications} />
          </FormGroup>
        </div>
        <div className="client-control-notifications__right">
          <FormGroup label="Private Notes: (Customers do not see this)">
            <Textarea rows="12" onChange={handleInput} name="privateNotes" variant="primary" value={clientData.privateNotes} />
          </FormGroup>
        </div>
      </div>
      <div className="client-control-notifications__footer">
        <Button variant="accent-blue" type="submit">Submit</Button>
      </div>
    </Form>
  );
};

export default ClientControlNotifications;
