import React, { Fragment, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchFiguresData } from 'admin-app/redux/figures/actions';
import { selectFigures } from 'admin-app/redux/figures/selectors';
// Components
import FiguresHeader from "./figures-header/figures-header";
import PrimaryTable from 'shared/components/primary-table/primary-table';
import Pagination from 'shared/components/pagination/pagination';
import TableFilter from 'admin-app/components/table-filter/table-filter';
// Table content
import tableContent from './table-content';
import tableLastRow from './table-last-row';
// Filters
import filtersData from './filters-data';
// Styles
import './figures.sass';

const Figures = ({ fetchFiguresData, figures: { loading, data, error }, history }) => {
  const [date, setDate] = useState('12/7/2020');
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('active');
  const [filters, setFilters] = useState(filtersData);
  const [isFilterShown, setIsFilterShown] = useState(false);

  useLayoutEffect(() => {
    fetchFiguresData(date, status);
  }, [fetchFiguresData, date, status]);

  const handleCheck = ({ target: { name, checked } }) => {
    setFilters(filters => {
      const currentFilter = filters.find((filter) => filter.name === name);
      const updatedFilter = { ...currentFilter, checked };
      return filters.map((filter) => filter.name === name ? updatedFilter : filter);
    });
  };

  return (
    <Fragment>
      <TableFilter
        title="Columns: Turn on/off"
        filters={filters}
        isShown={isFilterShown}
        handleHide={() => setIsFilterShown(false)}
        handleCheck={handleCheck}
      />
      <div className="figures">
        <div className="figures__header">
          <FiguresHeader pages={10} page={page} setPage={setPage} date={date} setDate={setDate} status={status} setStatus={setStatus} showFilters={() => setIsFilterShown(true)} />
        </div>
        <div className="figures__table">
          <PrimaryTable
            cols={tableContent(history)}
            lastRow={tableLastRow(data)}
            loading={loading}
            data={data}
            error={error}
            retry={() => fetchFiguresData('', '')}
            variant="primary"
          />
        </div>
        <div className="figures__footer">
          <Pagination pages={10} page={page} onChange={setPage} />
        </div>
      </div>
    </Fragment>
  );
};

Figures.propTypes = {
  fetchFiguresData: PropTypes.func,
  figures: PropTypes.object,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  figures: selectFigures
});

const mapDispatchToProps = dispatch => ({
  fetchFiguresData: (date, status) => dispatch(fetchFiguresData(date, status))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Figures));