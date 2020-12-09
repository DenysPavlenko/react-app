import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Components
import PageHeader from 'admin-app/components/page-header/page-header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from 'shared/components/typography/typography';
import RowGroup from 'shared/components/row-group/row-group';
import Search from 'shared/components/search/search';
import Button from 'shared/components/button/button';
import Pagination from 'shared/components/pagination/pagination';

const CustomerListHeader = ({ handleSettingsClick, handleSearch }) => {
  const [page, setPage] = useState(1);

  const onPageChange = page => setPage(page);

  return (
    <PageHeader
      left={<Typography component="h2">Customer list</Typography>}
      right={
        <RowGroup>
          <Search radius style={{ width: 'auto' }} handleSearchInput={handleSearch} />
          <Button
            onClick={handleSettingsClick}
            variant="accent-blue"
            size="sm"
            iconStart={<FontAwesomeIcon icon="cog" style={{ 'fontSize': '14px' }} />}
          >
            Settings
          </Button>
          <Pagination pages={10} page={page} onChange={onPageChange} />
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
