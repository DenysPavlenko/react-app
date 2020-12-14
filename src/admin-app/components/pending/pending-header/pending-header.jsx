import React from 'react';
// Components
import PageHeader from 'admin-app/components/page-header/page-header';
import Typography from 'shared/components/typography/typography';
import RowGroup from 'shared/components/row-group/row-group';
import Search from 'shared/components/search/search';
import ButtonGroup from 'shared/components/button-group/button-group';
import Button from 'shared/components/button/button';

const tabs = [
  { title: 'Games', value: 'games' },
  { title: 'Contest', value: 'contest' },
  { title: 'horses', value: 'horses' },
  { title: 'open', value: 'open' },
  { title: 'free', value: 'free' },
  { title: 'live', value: 'live' },
];

const PendingHeader = ({ currentFilter, setCurrentFilter, handleSearch }) => {
  return (
    <PageHeader
      left={<Typography component="h2">Pending</Typography>}
      right={
        <RowGroup>
          <Search style={{ width: 'auto' }} onChange={handleSearch} />
          <ButtonGroup>
            {tabs.map(({ title, value }, idx) => (
              <Button key={idx} isActive={currentFilter === value} onClick={() => setCurrentFilter(value)} variant="alt-gray" size="sm">{title}</Button>
            ))}
          </ButtonGroup>
        </RowGroup>
      }
    />
  );
};

export default PendingHeader;
