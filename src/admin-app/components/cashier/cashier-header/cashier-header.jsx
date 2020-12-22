import React from 'react';
// Components
import CashierActions from '../cashier-actions/cashier-actions';
import PageHeader from 'admin-app/components/page-header/page-header';
import Typography from 'shared/components/typography/typography';
import RowGroup from 'shared/components/row-group/row-group';
import Button from 'shared/components/button/button';

const CashierHeader = ({ status, setStatus, showFilters }) => {
  return (
    <PageHeader
      left={<Typography component="h2">Cashier</Typography>}
      right={
        <RowGroup>
          <Button variant="default">Submit</Button>
          <Button variant="danger">Reset</Button>
          <CashierActions status={status} setStatus={setStatus} showFilters={showFilters} />
        </RowGroup>
      }
    />
  );
};

export default CashierHeader;
