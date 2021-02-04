import React from 'react';
import PropTypes from 'prop-types';
// Components
import PageHeader from 'components/page-header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from 'components/typography';
import RowGroup from 'components/row-group';
import Search from 'components/search';
import Button from 'components/button';

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
