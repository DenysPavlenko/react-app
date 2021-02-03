import React from 'react';
import PropTypes from 'prop-types';
// Components
import PageHeader from 'admin-app/components/page-header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from 'shared/components/typography';
import RowGroup from 'shared/components/row-group';
import Search from 'shared/components/search';
import Button from 'shared/components/button';

const Header = ({ handleSearch, handleModalOpen }) => {
  return (
    <PageHeader
      left={<Typography component="h2">Agents</Typography>}
      right={
        <RowGroup center>
          <Search style={{ width: 'auto' }} onChange={handleSearch} variant="secondary" />
          <Button
            variant="default"
            onClick={handleModalOpen}
            iconStart={<FontAwesomeIcon icon="user-plus" style={{ 'fontSize': '14px' }} />}
          >
            New agent
          </Button>
        </RowGroup>
      }
    />
  );
};

Header.propTypes = {
  handleSearch: PropTypes.func,
  handleModalOpen: PropTypes.func,
};

export default Header;
