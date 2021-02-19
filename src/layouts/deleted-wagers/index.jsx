import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { deletedWagersRequested } from 'redux/deleted-wagers/actions';
import { selectDeletedWagers } from 'redux/deleted-wagers/selectors';
// Components
import PrimaryTable from 'components/primary-table';
import DeletedWagersHeader from './deleted-wagers-header'
// Table content
import tableContent from './table-content';
// Styles
import './styles.sass';

const DeletedWagers = ({ deletedWagersRequested, deletedWagers: { loading, data, error } }) => {
  const [date, setDate] = useState('12/7/2020');

  useLayoutEffect(() => {
    deletedWagersRequested(date);
  }, [date, deletedWagersRequested]);

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
          retry={() => deletedWagersRequested(date)}
        />
      </div>
    </div>
  );
};

DeletedWagers.propTypes = {
  deletedWagersRequested: PropTypes.func,
  deletedWagers: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  deletedWagers: selectDeletedWagers
});

const mapDispatchToProps = {
  deletedWagersRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(DeletedWagers);
