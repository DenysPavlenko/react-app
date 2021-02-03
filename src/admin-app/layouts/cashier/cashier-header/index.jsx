import React from 'react';
// Components
import Actions from '../cashier-actions';
import PageHeader from 'admin-app/components/page-header';
import Typography from 'shared/components/typography';
import RowGroup from 'shared/components/row-group';
import Button from 'shared/components/button';

const Header = ({ status, setStatus, showFilters }) => {
  return (
    <PageHeader
      left={<Typography component="h2">Cashier</Typography>}
      right={
        <RowGroup center>
          <Button variant="default">Submit</Button>
          <Button variant="danger">Reset</Button>
          <Actions status={status} setStatus={setStatus} showFilters={showFilters} />
        </RowGroup>
      }
    />
  );
};

export default Header;
