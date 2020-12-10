import React from 'react';
import PropTypes from 'prop-types';
// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './status-icon.sass';

const StatusIcon = ({ status }) => (
  <FontAwesomeIcon icon={status ? 'check' : 'times'} className={`status-icon ${status ? 'text-accent' : 'text-danger'}`} />
);

StatusIcon.propTypes = {
  status: PropTypes.bool,
};

export default StatusIcon;
