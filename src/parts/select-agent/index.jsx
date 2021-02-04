import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchAgentsListData } from 'redux/agents-list/actions';
import { selectAgentsList } from 'redux/agents-list/selectors';
// Components
import Dropdown from 'components/dropdown';
import Typography from 'components/typography';
import Button from 'components/button';
import Search from 'components/search';
import AgentsTree from 'parts/agents-tree';
import Spinner from 'components/spinner/spinner';
import ErrorIndicator from 'components/error-indicator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './styles.sass'

const SelectAgent = ({ fetchAgentsListData, agentsList: { loading, error, data } }) => {
  const [isActive, setIsActive] = useState(false);
  const [showTree, setShowTree] = useState(false);

  const handleDropdown = () => setIsActive(isActive => !isActive);

  const handleShowTreeClick = () => {
    setShowTree(true);
    fetchAgentsListData();
  };

  const handleAgentClick = (id, name) => {
    setIsActive(false);
  };

  return (
    <div className="select-agent">
      <div className="select-agent__header">
        <div className="select-agent__name">
          <Typography>ZTMA</Typography>
        </div>
        <Dropdown isActive={isActive} onClickOutside={handleDropdown}>
          <Dropdown.Header className="select-agent__toggle" onClick={handleDropdown}>
            <Button className="select-agent__toggle-button">
              <FontAwesomeIcon icon="chevron-down" className="select-agent__toggle-icon" />
            </Button>
          </Dropdown.Header>
          <Dropdown.Box className="select-agent__box">
            <div className="select-agent__search">
              <Search onSubmit={() => { }} variant="light" />
            </div>
            {!showTree && <Button fluid variant="primary" onClick={handleShowTreeClick}>Show tree</Button>}
            {showTree &&
              <Fragment>
                {error && <ErrorIndicator retry={fetchAgentsListData} />}
                {(!error && loading) && <Spinner boxed />}
                {(!error && !loading) && <AgentsTree agents={data} onAgentClick={handleAgentClick} />}
              </Fragment>
            }
          </Dropdown.Box>
        </Dropdown>
      </div>
    </div>
  );
};

SelectAgent.propTypes = {
  agentsList: PropTypes.object,
  fetchAgentsListData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  agentsList: selectAgentsList
});

const mapDispatchToProps = dispatch => ({
  fetchAgentsListData: () => dispatch(fetchAgentsListData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectAgent);
