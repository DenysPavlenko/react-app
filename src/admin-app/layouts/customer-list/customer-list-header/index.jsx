import React from 'react';
import PropTypes from 'prop-types';
// Components
import PageHeader from 'admin-app/components/page-header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from 'shared/components/typography';
import RowGroup from 'shared/components/row-group';
import Search from 'shared/components/search';
import Button from 'shared/components/button';

const Header = ({ handleSettingsClick, handleSearch }) => {
  return (
    <PageHeader
      left={<Typography component="h2">Customer list</Typography>}
      right={
        <RowGroup center>
          <Search style={{ width: 'auto' }} onChange={handleSearch} variant="secondary" />
          <Button
            onClick={handleSettingsClick}
            variant="default"
            iconStart={<FontAwesomeIcon icon="cog" style={{ 'fontSize': '14px' }} />}
          >
            Settings
          </Button>
        </RowGroup>
      }
    />
  );
};

Header.propTypes = {
  handleSettingsClick: PropTypes.func,
  handleSearch: PropTypes.func,
};

export default Header;
