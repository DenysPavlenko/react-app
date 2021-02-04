import React from 'react';
import PropTypes from 'prop-types';
// Components
import PageHeader from 'components/page-header';
import Typography from 'components/typography';
import RowGroup from 'components/row-group';
import Search from 'components/search';

const Header = ({  handleSearch }) => {
  return (
    <PageHeader
      left={<Typography component="h2">Customer list</Typography>}
      right={
        <RowGroup center>
          <Search style={{ width: 'auto' }} onChange={handleSearch} variant="secondary" />
        </RowGroup>
      }
    />
  );
};

Header.propTypes = {
  handleSearch: PropTypes.func,
};

export default Header;
