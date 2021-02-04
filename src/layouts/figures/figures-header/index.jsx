import React from 'react';
import PropTypes from 'prop-types';
// Components
import PageHeader from 'components/page-header';
import Actions from '../figures-actions';
import Typography from 'components/typography';
import ButtonGroup from 'components/button-group';
import RowGroup from 'components/row-group';
import Button from 'components/button';
import Select from 'components/select';

const tabs = [
  { title: 'Current week', value: '12/7/2020' },
  { title: 'Last week', value: '11/30/2020' },
];

const Header = ({ date, setDate, status, setStatus, showFilters }) => {
  return (
    <PageHeader
      left={<Typography component="h2">Figures</Typography>}
      right={
        <RowGroup center>
          <Actions status={status} setStatus={setStatus} showFilters={showFilters} />
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

Header.propTypes = {
  date: PropTypes.string,
  setDate: PropTypes.func,
  status: PropTypes.string,
  setStatus: PropTypes.func,
  showFilters: PropTypes.func,
};

export default Header;
