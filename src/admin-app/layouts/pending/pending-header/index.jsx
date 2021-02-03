import React from 'react';
import PropTypes from 'prop-types';
// Components
import PageHeader from 'admin-app/components/page-header';
import Typography from 'shared/components/typography';
import RowGroup from 'shared/components/row-group';
import Search from 'shared/components/search';
import ButtonGroup from 'shared/components/button-group';
import Button from 'shared/components/button';

const buttons = [
  { title: 'Games', value: 'games' },
  { title: 'Contest', value: 'contest' },
  { title: 'Horses', value: 'horses' },
  { title: 'Open', value: 'open' },
  { title: 'Free', value: 'free' },
  { title: 'Live', value: 'live' },
];

const Header = ({ currentFilter, setCurrentFilter, handleSearch }) => {
  return (
    <PageHeader
      left={<Typography component="h2">Pending</Typography>}
      right={
        <RowGroup center>
          <Search style={{ width: 'auto' }} onChange={handleSearch} variant="secondary" />
          <ButtonGroup responsive>
            {buttons.map(({ title, value }, idx) => (
              <Button key={idx} isActive={currentFilter === value} onClick={() => setCurrentFilter(value)} variant="default">{title}</Button>
            ))}
          </ButtonGroup>
        </RowGroup>
      }
    />
  );
};

Header.propTypes = {
  currentFilter: PropTypes.string,
  setCurrentFilter: PropTypes.func,
  handleSearch: PropTypes.func,
};

export default Header;
