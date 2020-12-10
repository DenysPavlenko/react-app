import React from 'react';
// Components
import Form from 'shared/components/form/form';
import FormGroup from 'shared/components/form-group/form-group';
import Input from 'shared/components/input/input';
import Select from 'shared/components/select/select';
import Textarea from 'shared/components/textarea/textarea';
import Typography from 'shared/components/typography/typography';
import Button from 'shared/components/button/button';
import RadioButton from 'shared/components/radio-button/radio-button';
import Checkbox from 'shared/components/checkbox/checkbox';
import Table from 'shared/components/table/table';
// Styles
import './client-control-general.sass';

const ClientControlGeneral = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Form className="client-control-general" onSubmit={handleSubmit}>
      <div className="client-control-general__wrap">
        <div className="client-control-general__left">
          <Typography component="h2" className="client-control-general__title">Personal Settings</Typography>
          <div className="client-control-general__item">
            <FormGroup label="Password">
              <Input value="10" type="text" name="password" onChange={() => { }} variant="primary" />
            </FormGroup>
            <FormGroup label="Name">
              <Input value="John" type="text" name="name" onChange={() => { }} variant="primary" />
            </FormGroup>
          </div>
          <div className="client-control-general__item">
            <FormGroup label="Referred By">
              <Input value="" type="text" name="referedBy" onChange={() => { }} variant="primary" />
            </FormGroup>
            <FormGroup label="Home">
              <Input value="" type="text" name="home" onChange={() => { }} variant="primary" />
            </FormGroup>
          </div>
          <div className="client-control-general__item">
            <FormGroup label="Email">
              <Input value="" type="email" name="email" onChange={() => { }} variant="primary" />
            </FormGroup>
            <FormGroup label="Mobile">
              <Input value="" type="phone" name="mobile" onChange={() => { }} variant="primary" />
            </FormGroup>
          </div>
          <div className="client-control-general__item">
            <FormGroup label="Wager Alerts">
              <Input value="" type="text" name="wagerAlerts" onChange={() => { }} variant="primary" />
            </FormGroup>
            <FormGroup label="Rating">
              <Select
                variant="primary"
                onChange={() => { }}
                options={[
                  { label: 'None', value: 'none' },
                  { label: 'Bronze', value: 'bronze' },
                  { label: 'Silver', value: 'silver' },
                  { label: 'Diamond', value: 'diamond' },
                  { label: 'Gold', value: 'gold' },
                ]}
              />
            </FormGroup>
          </div>
          <div className="client-control-general__item client-control-general__item--fluid">
            <FormGroup label="Private Notes: (Customers do not see this)">
              <Textarea rows="7" name="text" onChange={() => { }} variant="primary" ></Textarea>
            </FormGroup>
          </div>
        </div>
        <div className="client-control-general__right">
          <Typography component="h2" className="client-control-general__title">Account Status / Access</Typography>

          <Table className="client-control-general__table">
            <thead>
              <tr>
                <th><Typography component="h5">Account Status:</Typography></th>
                <th><Typography component="h5">Open:</Typography></th>
                <th><Typography component="h5">Closed:</Typography></th>
                <th><Typography component="h5">View only:</Typography></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Typography component="p">Account Status:</Typography>
                </td>
                <td>
                  <RadioButton onChange={() => { }} name="" checked={true} />
                </td>
                <td>
                  <RadioButton onChange={() => { }} name="" checked={false} />
                </td>
                <td>
                  <Checkbox checked={true} onChange={() => { }} />
                </td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th><Typography component="h5">Account Access:</Typography></th>
                <th><Typography component="h5">Call Center:</Typography></th>
                <th colSpan="2"><Typography component="h5">Internet:</Typography></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Typography component="p">Sport Access:</Typography>
                </td>
                <td>
                  <Checkbox checked={true} onChange={() => { }} />
                </td>
                <td colSpan="2">
                  <Checkbox checked={true} onChange={() => { }} />
                </td>
              </tr>
              <tr>
                <td>
                  <Typography component="p">Live Sport Access:</Typography>
                </td>
                <td>
                  <Checkbox checked={true} onChange={() => { }} />
                </td>
                <td colSpan="2">
                  <Checkbox checked={true} onChange={() => { }} />
                </td>
              </tr>
              <tr>
                <td>
                  <Typography component="p">Horses Access:</Typography>
                </td>
                <td>
                  <Checkbox checked={true} onChange={() => { }} />
                </td>
                <td colSpan="2">
                  <Checkbox checked={true} onChange={() => { }} />
                </td>
              </tr>
              <tr>
                <td>
                  <Typography component="p">Casino Access:</Typography>
                </td>
                <td>
                  <Checkbox checked={true} onChange={() => { }} />
                </td>
                <td colSpan="2">
                  <Checkbox checked={true} onChange={() => { }} />
                </td>
              </tr>
              <tr>
                <td>
                  <Typography component="p">Straight - Games:</Typography>
                </td>
                <td>
                  <Checkbox checked={true} onChange={() => { }} />
                </td>
                <td colSpan="2">
                  <Checkbox checked={true} onChange={() => { }} />
                </td>
              </tr>
              <tr>
                <td>
                  <Typography component="p">Straight - Contests Access:</Typography>
                </td>
                <td>
                  <Checkbox checked={true} onChange={() => { }} />
                </td>
                <td colSpan="2">
                  <Checkbox checked={true} onChange={() => { }} />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="client-control-general__footer">
        <Button variant="accent-blue" type="submit">Submit</Button>
      </div>
    </Form>
  );
};

export default ClientControlGeneral;
