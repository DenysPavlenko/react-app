import React from 'react';
import PropTypes from 'prop-types';
// Components
import Simplebar from 'simplebar-react';
// Styles
import './agents-tree.sass';

const AgentsTree = ({ agents, onAgentClick }) => {
  return (
    <div className="agents-tree">
      <Simplebar className="custom-scroll agents-tree__scroll">
        {agents.map(({ id, name }) => (
          <div className="agents-tree__agent" key={id} onClick={() => { onAgentClick(id, name) }}>{name}</div>
        ))}
      </Simplebar>
    </div>
  );
};

AgentsTree.propTypes = {
  agents: PropTypes.array,
  onAgentClick: PropTypes.func,
};

export default AgentsTree;
