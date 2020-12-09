import React from 'react';
// Components
import PageHeader from 'admin-app/components/page-header/page-header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from 'shared/components/typography/typography';
import RowGroup from 'shared/components/row-group/row-group';
import Search from 'shared/components/search/search';

const PendingHeader = () => {
  return (
    <PageHeader
      className="pending-header"
      left={<Typography component="h2">Pending</Typography>}
      right={
        <RowGroup>
          <Search radius style={{ width: 'auto' }} handleSearchInput={() => { }} />
        </RowGroup>
      }
    />
  );
};

export default PendingHeader;
