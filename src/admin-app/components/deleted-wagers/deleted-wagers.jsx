import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { fetchDeletedWagersData } from 'admin-app/redux/deleted-wagers/actions';
import { selectDeletedWagers } from 'admin-app/redux/deleted-wagers/selectors';
// Components
import PrimaryTable from 'shared/components/primary-table/primary-table';
import DeletedWagersHeader from './deleted-wagers-header/deleted-wagers-header';
// Table content
import tableContent from './table-content';
// Styles
import './deleted-wagers.sass';

const DeletedWagers = ({ fetchDeletedWagersData, deletedWagers: { loading, data, error } }) => {
  const [date, setDate] = useState('12/7/2020');

  useLayoutEffect(() => {
    fetchDeletedWagersData(date);
  }, [date, fetchDeletedWagersData]);

  return (
    <div className="deleted-wagers">
      <div className="deleted-wagers__header">
        <DeletedWagersHeader date={date} setDate={setDate} />
      </div>
      <div className="deleted-wagers__table">
        <PrimaryTable
          cols={tableContent()}
          loading={loading}
          data={data}
          error={error}
          retry={() => fetchDeletedWagersData(date)}
          variant="primary"
          size="sm"
        />
      </div>
    </div>
  );
};

DeletedWagers.propTypes = {
  fetchDeletedWagersData: PropTypes.func,
  deletedWagers: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  deletedWagers: selectDeletedWagers
});

const mapDispatchToProps = dispatch => ({
  fetchDeletedWagersData: date => dispatch(fetchDeletedWagersData(date))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeletedWagers);
