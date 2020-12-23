import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Components
import Dropdown from 'shared/components/dropdown/dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonGroup from 'shared/components/button-group/button-group';
import Button from 'shared/components/button/button';
import Typography from 'shared/components/typography/typography';
// Styles
import './cashier-actions.sass';

const CashierActions = ({ status, setStatus, showFilters }) => {
  const [isActive, setIsActive] = useState(false);

  const handleDropdown = () => setIsActive(isActive => !isActive);

  return (
    <Dropdown className="cashier-actions" isActive={isActive} onClickOutside={handleDropdown}>
      <Dropdown.Header className="cashier-actions__toggle" onClick={handleDropdown} >
        <Button variant="default" iconEnd={<FontAwesomeIcon icon="caret-down" />}>Actions</Button>
      </Dropdown.Header>
      <Dropdown.Box className="cashier-actions__box">
        <div className="cashier-actions__group">
          <Typography className="cashier-actions__group-title" component="h5">Players:</Typography>
          <ButtonGroup separated onClick={handleDropdown}>
            <Button variant="alt-gray" isActive={status === 'active'} onClick={() => setStatus('active')}>Active</Button>
            <Button variant="alt-gray" isActive={status === 'all'} onClick={() => setStatus('all')}>All</Button>
          </ButtonGroup>
        </div>
        <div className="cashier-actions__group">
          <Typography className="cashier-actions__group-title" component="h5">Actions:</Typography>
          <Button variant="default" size="sm" iconStart={<FontAwesomeIcon icon="cog" style={{ 'fontSize': '14px' }} />} fluid>Settings</Button>
        </div>
      </Dropdown.Box>
    </Dropdown>
  );
};

CashierActions.propTypes = {
  status: PropTypes.string,
  setStatus: PropTypes.func,
  showFilters: PropTypes.func,
};

export default CashierActions;