import React from 'react';
// Components
import Actions from '../cashier-actions';
import PageHeader from 'components/page-header';
import Typography from 'components/typography';
import RowGroup from 'components/row-group';
import Button from 'components/button';

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
