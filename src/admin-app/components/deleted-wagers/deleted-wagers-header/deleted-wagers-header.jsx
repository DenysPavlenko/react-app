import React from 'react';
import PropTypes from 'prop-types';
// Components
import PageHeader from 'admin-app/components/page-header/page-header';
import Typography from 'shared/components/typography/typography';
import RowGroup from 'shared/components/row-group/row-group';
import Select from 'shared/components/select/select';
import ButtonGroup from 'shared/components/button-group/button-group';
import Button from 'shared/components/button/button';

const tabs = [
  { title: 'current week', value: '12/7/2020' },
  { title: 'last week', value: '11/30/2020' },
];

const DeletedWagersHeader = ({ date, setDate }) => {

  const handleSelect = ({ target: { value } }) => setDate(value);

  return (
    <PageHeader
      left={<Typography component="h2">Deleted Wagers</Typography>}
      right={
        <RowGroup>
          <Select
            onChange={handleSelect}
            value={date}
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
              <Button key={idx} isActive={date === value} onClick={() => setDate(value)} variant="alt-gray">{title}</Button>
            ))}
          </ButtonGroup>
        </RowGroup>
      }
    />
  );
};

DeletedWagersHeader.propTypes = {
  date: PropTypes.string,
  setDate: PropTypes.func,
};

export default DeletedWagersHeader;
