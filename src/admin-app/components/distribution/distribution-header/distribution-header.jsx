import React from 'react';
import PropTypes from 'prop-types';
// Components
import PageHeader from 'admin-app/components/page-header/page-header';
import Typography from 'shared/components/typography/typography';
import ButtonGroup from 'shared/components/button-group/button-group';
import RowGroup from 'shared/components/row-group/row-group';
import Button from 'shared/components/button/button';
import Select from 'shared/components/select/select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const tabs = [
  { title: 'Current week', value: '12/7/2020' },
  { title: 'Last week', value: '11/30/2020' },
];

const DistributionHeader = ({ date, setDate, pages, page, setPage, breakpoints, currentBreakpoint, showFilters }) => {
  return (
    <PageHeader
      left={<Typography component="h2">Distribution</Typography>}
      right={
        <RowGroup center>
          <Button variant="default" iconStart={<FontAwesomeIcon icon="cog" style={{ 'fontSize': '14px' }} />} onClick={showFilters}>Settings</Button>
          <Select
            onChange={({ target: { value } }) => setDate(value)}
            value={date}
            variant="default"
            options={[
              { label: '12/7/2020', value: '12/7/2020' },
              { label: '11/30/2020', value: '11/30/2020' },
              { label: '11/23/2020', value: '11/23/2020' },
              { label: '11/16/2020', value: '11/16/2020' },
              { label: '11/9/2020', value: '11/9/2020' },
              { label: '11/2/2020', value: '11/2/2020' },
              { label: '10/26/2020', value: '10/26/2020' },
              { label: '10/19/2020', value: '10/19/2020' },
              { label: '10/12/2020', value: '10/12/2020' },
              { label: '10/5/2020', value: '10/5/2020' },
              { label: '9/28/2020', value: '9/28/2020' },
              { label: '9/21/2020', value: '9/21/2020' },
              { label: '9/14/2020', value: '9/14/2020' },
            ]}
          />
          <ButtonGroup>
            {tabs.map(({ title, value }, idx) => (
              <Button key={idx} isActive={date === value} onClick={() => setDate(value)} variant="default">{title}</Button>
            ))}
          </ButtonGroup>
        </RowGroup>
      }
    />
  );
};

DistributionHeader.propTypes = {
  date: PropTypes.string,
  setDate: PropTypes.func,
  status: PropTypes.string,
  setStatus: PropTypes.func,
  breakpoints: PropTypes.object,
  currentBreakpoint: PropTypes.string,
  showFilters: PropTypes.func,
};

export default DistributionHeader;
