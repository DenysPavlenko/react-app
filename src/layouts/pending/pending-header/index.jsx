import React from 'react';
import PropTypes from 'prop-types';
// Components
import PageHeader from 'components/page-header';
import Typography from 'components/typography';
import RowGroup from 'components/row-group';
import Search from 'components/search';
import ButtonGroup from 'components/button-group';
import Button from 'components/button';

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
