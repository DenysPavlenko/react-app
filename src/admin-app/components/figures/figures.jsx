import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchFiguresData } from 'admin-app/redux/figures/actions';
import { selectFigures } from 'admin-app/redux/figures/selectors';
// Components
import FiguresHeader from "./figures-header/figures-header";
import PrimaryTable from 'shared/components/primary-table/primary-table';
import Pagination from 'shared/components/pagination/pagination';
// Table content
import tableContent from './table-content';
// Styles
import './figures.sass';

const Figures = ({ fetchFiguresData, figures: { loading, data, error } }) => {
  const [date, setDate] = useState('12/7/2020');
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('active');

  useLayoutEffect(() => {
    fetchFiguresData(date, status);
  }, [fetchFiguresData, date, status]);

  return (
    <div className="figures">
      <div className="figures__header">
        <FiguresHeader pages={10} page={page} setPage={setPage} date={date} setDate={setDate} status={status} setStatus={setStatus} />
      </div>
      <div className="figures__table">
        <PrimaryTable cols={tableContent()} loading={loading} data={data} error={error} retry={() => fetchFiguresData('', '')} variant="primary" />
      </div>
      <div className="figures__footer">
        <Pagination pages={10} page={page} onChange={setPage} />
      </div>
    </div>
  );
};

Figures.propTypes = {
  fetchFiguresData: PropTypes.func,
  figures: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  figures: selectFigures
});

const mapDispatchToProps = dispatch => ({
  fetchFiguresData: (date, status) => dispatch(fetchFiguresData(date, status))
});

export default connect(mapStateToProps, mapDispatchToProps)(Figures);
