import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Components
import Dropdown from 'shared/components/dropdown/dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonGroup from 'shared/components/button-group/button-group';
import Button from 'shared/components/button/button';
import Typography from 'shared/components/typography/typography';
// Styles
import './figures-actions.sass';

const FiguresActions = ({ status, setStatus, showFilters }) => {
  const [isActive, setIsActive] = useState(false);

  const handleDropdown = () => setIsActive(isActive => !isActive);

  return (
    <Dropdown className="figures-actions" isActive={isActive} onClickOutside={handleDropdown}>
      <Dropdown.Header className="figures-actions__toggle" onClick={handleDropdown} >
        <Button variant="default" size="lg" iconEnd={<FontAwesomeIcon icon="caret-down" />}>Actions</Button>
      </Dropdown.Header>
      <Dropdown.Box className="figures-actions__box">
        <div className="figures-actions__group">
          <Typography className="figures-actions__group-title" component="h5">Players:</Typography>
          <ButtonGroup separated onClick={handleDropdown}>
            <Button variant="alt-gray" isActive={status === 'active'} onClick={() => setStatus('active')} size="lg">Active</Button>
            <Button variant="alt-gray" isActive={status === 'all'} onClick={() => setStatus('all')} size="lg">All</Button>
          </ButtonGroup>
        </div>
        <div className="figures-actions__group">
          <Typography className="figures-actions__group-title" component="h5">Actions:</Typography>
          <div className="figures-actions__group-column">
            <Button variant="default" size="sm" iconStart={<FontAwesomeIcon icon="print" style={{ 'fontSize': '14px' }} />} fluid>Print</Button>
            <Button variant="default" size="sm" iconStart={<FontAwesomeIcon icon="cog" style={{ 'fontSize': '14px' }} />} fluid onClick={showFilters}>Settings</Button>
            <Button variant="default" size="sm" iconStart={<FontAwesomeIcon icon="download" style={{ 'fontSize': '14px' }} />} fluid>Export</Button>
          </div>
        </div>
      </Dropdown.Box>
    </Dropdown>
  );
};

FiguresActions.propTypes = {
  status: PropTypes.string,
  setStatus: PropTypes.func,
  showFilters: PropTypes.func,
};

export default FiguresActions;