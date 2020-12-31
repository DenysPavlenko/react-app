import React from 'react';
import PropTypes from 'prop-types';
// Components
import PageHeader from 'admin-app/components/page-header/page-header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from 'shared/components/typography/typography';
import RowGroup from 'shared/components/row-group/row-group';
import Search from 'shared/components/search/search';
import Button from 'shared/components/button/button';

const CustomerListHeader = ({ handleSettingsClick, handleSearch }) => {
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

CustomerListHeader.propTypes = {
  handleSettingsClick: PropTypes.func,
  handleSearch: PropTypes.func,
};

export default CustomerListHeader;
