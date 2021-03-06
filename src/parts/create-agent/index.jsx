import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Components
import Modal from 'components/modal';
import Typography from 'components/typography';
import Close from 'components/close';
import Form from 'components/form';
import FormGroup from 'components/form-group';
import Input from 'components/input';
import Select from 'components/select';
import Button from 'components/button';
import Checkbox from 'components/checkbox';
import CreateAccounts from 'parts/create-accounts';
// Initial Inputs
import initialInputs from './initial-inputs';
// Styles
import './styles.sass';

const CreateAgent = ({ open, onClose }) => {
  const [inputs, setInputs] = useState(initialInputs);
  const [newAccounts, setNewAccoutns] = useState(false);

  const handleCheckbox = ({ target: { checked } }) => setNewAccoutns(checked);
  const handleSubmit = e => e.preventDefault();
  const handleInput = ({ target: { name, value } }) => {
    setInputs(inputs => ({
      ...inputs,
      [name]: value,
    }));
  };

  const { agent, id, password, all, ccAndInt, intOnly, liveSport, casino, liveCasino } = inputs;

  return (
    <Modal open={open} onClose={onClose} className="create-agent" noClose size="lg">
      <Form onSubmit={handleSubmit}>
        <div className="create-agent__header">
          <Typography component="h2">Create New Agent</Typography>
          <Close size="lg" onClick={onClose} />
        </div>
        <div className="create-agent__block">
          <Typography className="create-agent__block-header" component="h3">General:</Typography>
          <div className="create-agent__block-items">
            <FormGroup className="create-agent__block-item" label="Master Agent:">
              <Select
                onChange={handleInput}
                value={agent}
                name="agent"
                options={[{ label: 'ZTMA', value: 'ztma' }, { label: 'ZTMA1', value: 'ztma1' }]}
                variant="primary-light"
              />
            </FormGroup>
            <FormGroup className="create-agent__block-item" label="Agent ID:">
              <Input value={id} name="id" type="text" onChange={handleInput} variant="primary-light" />
            </FormGroup>
            <FormGroup className="create-agent__block-item" label="Password:">
              <Input value={password} name="password" type="password" onChange={handleInput} variant="primary-light" />
            </FormGroup>
          </div>
        </div>
        <div className="create-agent__block">
          <Typography className="create-agent__block-header" component="h3">Agent's Percentage:</Typography>
          <div className="create-agent__block-items">
            <FormGroup className="create-agent__block-item" label="All:">
              <Input value={all} name="all" type="number" onChange={handleInput} variant="primary-light" />
            </FormGroup>
          </div>
        </div>
        <div className="create-agent__block">
          <Typography className="create-agent__block-header" component="h3">Per Head Weekly Fee:</Typography>
          <div className="create-agent__block-items">
            <FormGroup className="create-agent__block-item" label="Call Center & Internet:">
              <Input value={ccAndInt} name="ccAndInt" type="number" onChange={handleInput} variant="primary-light" />
            </FormGroup>
            <FormGroup className="create-agent__block-item" label="Internet Only:">
              <Input value={intOnly} name="intOnly" type="number" onChange={handleInput} variant="primary-light" />
            </FormGroup>
          </div>
        </div>
        <div className="create-agent__block">
          <Typography className="create-agent__block-header" component="h3">Extra Fees:</Typography>
          <div className="create-agent__block-items">
            <FormGroup className="create-agent__block-item" label="Live Sport:">
              <Input value={liveSport} name="liveSport" type="number" onChange={handleInput} variant="primary-light" />
            </FormGroup>
            <FormGroup className="create-agent__block-item" label="Casino:">
              <Input value={casino} name="casino" type="number" onChange={handleInput} variant="primary-light" />
            </FormGroup>
            <FormGroup className="create-agent__block-item" label="Live Casino:">
              <Input value={liveCasino} name="liveCasino" type="number" onChange={handleInput} variant="primary-light" />
            </FormGroup>
          </div>
        </div>
        <div className="create-agent__new-accounts">
          <div className="create-agent__new-accounts-check">
            <Checkbox checked={newAccounts} onChange={handleCheckbox} label="Create New Accounts" />
          </div>
          {newAccounts &&
            <CreateAccounts />
          }
        </div>
        <div className="create-agent__footer">
          <div className="create-agent__footer-item">
            <Button variant="accent" size="sm" onClick={onClose}>Save</Button>
          </div>
          <div className="create-agent__footer-item">
            <Button variant="danger" size="sm" onClick={onClose}>Close</Button>
          </div>
        </div>
      </Form>
    </Modal>
  );
};

CreateAgent.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default CreateAgent;
