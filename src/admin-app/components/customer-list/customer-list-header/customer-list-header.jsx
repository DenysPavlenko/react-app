import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withBreakpoints } from 'react-breakpoints';
// Components
import PageHeader from 'admin-app/components/page-header/page-header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from 'shared/components/typography/typography';
import RowGroup from 'shared/components/row-group/row-group';
import Search from 'shared/components/search/search';
import Button from 'shared/components/button/button';
import Pagination from 'shared/components/pagination/pagination';

const CustomerListHeader = ({ handleSettingsClick, handleSearch, pages, page, setPage, breakpoints, currentBreakpoint }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (breakpoints[currentBreakpoint] < breakpoints.xl) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [breakpoints, currentBreakpoint]);

  return (
    <PageHeader
      left={<Typography component="h2">Customer list</Typography>}
      right={
        <RowGroup>
          <Search style={{ width: 'auto' }} onChange={handleSearch} />
          <Button
            onClick={handleSettingsClick}
            variant="default"
            iconStart={<FontAwesomeIcon icon="cog" style={{ 'fontSize': '14px' }} />}
          >
            Settings
          </Button>
          {!isMobile &&
            <Pagination pages={pages} page={page} onChange={setPage} className="customer-list-header__pagination" />
          }
        </RowGroup>
      }
    />
  );
};

CustomerListHeader.propTypes = {
  handleSettingsClick: PropTypes.func,
  handleSearch: PropTypes.func,
  pages: PropTypes.number,
  page: PropTypes.number,
  handlePageChange: PropTypes.func,
  breakpoints: PropTypes.object,
  currentBreakpoint: PropTypes.string,
};

export default withBreakpoints(CustomerListHeader);
