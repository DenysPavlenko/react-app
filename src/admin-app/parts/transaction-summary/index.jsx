import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Components
import Modal from 'shared/components/modal';
import Close from 'shared/components/close';
import Typography from 'shared/components/typography';
import ButtonGroup from 'shared/components/button-group';
import Button from 'shared/components/button';
import Textarea from 'shared/components/textarea';
import Input from 'shared/components/input';
import PrimaryTable from 'shared/components/primary-table';
// Table content
import tableContent from './table-content';
// Inputs
import initialInputs from './initial-inputs';
// Styles
import './styles.sass';

const TransactionSummary = ({ open, onClose, id, balance, deposit, newBalance }) => {
  const [inputs, setInputs] = useState(initialInputs)

  const handleInput = ({ target: { name, value } }) => setInputs(inputs => ({ ...inputs, [name]: value }));

  const { comment, deposit1, deposit2, description } = inputs;
  return (
    <Modal open={open} className="transaction-summary" onClose={onClose} size="sm" noClose>
      <div className="transaction-summary__header">
        <Typography component="h2">Transaction summary</Typography>
        <Close dark onClick={onClose} />
      </div>
      <div className="transaction-summary__info">
        <div className="transaction-summary__info-item">
          <Typography component="p">User ID:</Typography>
          <Typography component="p">{id}</Typography>
        </div>
        <div className="transaction-summary__info-item">
          <Typography component="p">Current balance:</Typography>
          <Typography component="p">{balance}</Typography>
        </div>
        <div className="transaction-summary__info-item">
          <Typography component="p" className="text-accent-blue">Deposit:</Typography>
          <Typography component="p" className="text-accent-blue">{deposit}</Typography>
        </div>
        <div className="transaction-summary__info-item">
          <Typography component="p">New Balance:</Typography>
          <Typography component="p">{newBalance}</Typography>
        </div>
      </div>
      <div className="transaction-summary__comment">
        <Typography component="p" className="transaction-summary__comment-title">Comment:</Typography>
        <Textarea value={comment} name="comment" rows="4" onChange={handleInput} variant="primary-light" />
      </div>
      <div className="transaction-summary__free-play">
        <div className="transaction-summary__free-play-title">
          <Typography component="span" variant="p">Free play deposit: </Typography>
          <Input value={deposit1} name="deposit1" size="xs" width="auto" type="number" onChange={handleInput} variant="primary-light" />
          <Typography component="span" variant="p">%</Typography>
          <Input value={deposit2} name="deposit2" size="xs" width="auto" type="number" onChange={handleInput} variant="primary-light" />
        </div>
        <div className="transaction-summary__free-play-descr">
          <Typography component="p" className="transaction-summary__comment-title">Description:</Typography>
          <Textarea rows="4" value={description} name="description" onChange={handleInput} variant="primary-light" />
        </div>
      </div>
      <div className="transaction-summary__actions">
        <ButtonGroup separated>
          <Button variant="danger" size="sm" onClick={onClose}>Cancel</Button>
          <Button variant="accent" size="sm" onClick={onClose}>Submit</Button>
        </ButtonGroup>
      </div>
      <div className="transaction-summary__footer">
        <Typography component="h3" className="transaction-summary__footer-title">Last 30 days:</Typography>
        <PrimaryTable
          className="transaction-summary__footer-table"
          cols={tableContent()}
          data={[]}
          variant="primary-light"
        />
      </div>
    </Modal>
  );
};

TransactionSummary.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  id: PropTypes.string,
  balance: PropTypes.string,
  deposit: PropTypes.string,
  newBalance: PropTypes.string,
};

export default TransactionSummary;
