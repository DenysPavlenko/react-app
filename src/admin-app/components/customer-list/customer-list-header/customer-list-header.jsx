import React from 'react';
// Components
import PageHeader from 'admin-app/components/page-header/page-header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from 'shared/components/typography/typography';
import RowGroup from 'shared/components/row-group/row-group';
import Search from 'shared/components/search/search';
import Button from 'shared/components/button/button';
import Pagination from 'shared/components/pagination/pagination';
// Styles
import './customer-list-header.sass';

const CustomerListHeader = ({ handleSettingsClick }) => {
  return (
    <PageHeader
      className="customer-list-header"
      left={<Typography component="h2">Customer list</Typography>}
      right={
        <RowGroup>
          <Search radius style={{ width: 'auto' }} />
          <Button
            onClick={handleSettingsClick}
            variant="accent-blue"
            size="sm"
            iconStart={<FontAwesomeIcon icon="cog" style={{ 'fontSize': '14px' }} />}
          >
            Settings</Button>
          <Pagination count={3} />
        </RowGroup>
      }
    />
  );
};

export default CustomerListHeader;
