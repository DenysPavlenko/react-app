import React from 'react';
import PropTypes from 'prop-types';
// Components
import PageHeader from 'admin-app/components/page-header/page-header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from 'shared/components/typography/typography';
import RowGroup from 'shared/components/row-group/row-group';
import Search from 'shared/components/search/search';
import Button from 'shared/components/button/button';

const AgentsHeader = ({ handleSearch }) => {
  return (
    <PageHeader
      left={<Typography component="h2">Agents</Typography>}
      right={
        <RowGroup>
          <Search style={{ width: 'auto' }} onChange={handleSearch} />
          <Button
            variant="default"
            iconStart={<FontAwesomeIcon icon="user-plus" style={{ 'fontSize': '14px' }} />}
          >
            New agent
          </Button>
        </RowGroup>
      }
    />
  );
};

AgentsHeader.propTypes = {
  handleSearch: PropTypes.func
};

export default AgentsHeader;
