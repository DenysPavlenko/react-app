import React, { useState } from 'react';
// Components
import PageHeader from 'admin-app/components/page-header/page-header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from 'shared/components/typography/typography';
import RowGroup from 'shared/components/row-group/row-group';
import Search from 'shared/components/search/search';
import Tabs from 'shared/components/tabs/tabs';
import Tab from 'shared/components/tab/tab';

const tabs = [
  { title: 'Games', value: 'games' },
  { title: 'Contest', value: 'contest' },
  { title: 'horses', value: 'horses' },
  { title: 'open', value: 'open' },
  { title: 'free', value: 'free' },
  { title: 'live', value: 'live' },
];

const PendingHeader = ({ currentFilter, setCurrentFilter }) => {
  return (
    <PageHeader
      className="pending-header"
      left={<Typography component="h2">Pending</Typography>}
      right={
        <RowGroup>
          <Search radius style={{ width: 'auto' }} handleSearchInput={() => { }} />
          <Tabs>
            {tabs.map(({ title, value }, idx) => (
              <Tab key={idx} isActive={currentFilter === value} onClick={() => setCurrentFilter(value)}>{title}</Tab>
            ))}
          </Tabs>
        </RowGroup>
      }
    />
  );
};

export default PendingHeader;
