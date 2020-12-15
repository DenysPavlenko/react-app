import React, { useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchClientDetailLimitsData } from 'admin-app/redux/client-detail-limits/actions';
import { selectClientDetailLimits } from 'admin-app/redux/client-detail-limits/selectors';
// Components
import Select from 'shared/components/select/select';
import FormGroup from 'shared/components/form-group/form-group';
import Button from 'shared/components/button/button';
import ButtonGroup from 'shared/components/button-group/button-group';
import Typography from 'shared/components/typography/typography';
import PrimaryTable from 'shared/components/primary-table/primary-table';
// Options
import options from './options';
// Table content
import tableContent from './table-content';
import tableFirstRow from './table-first-row';
// Styles
import './client-control-detail-limits.sass';

const initialGroupInputs = {
  callCenter: '',
  internet: '',
  circled: '',
};

const ClientControlDetailLimits = ({ fetchClientDetailLimitsData, clientDetailLimits: { loading, data, error }, clientId }) => {
  const [detailLimits, setDetailLimits] = useState('football');
  const [clientInputs, setclientInputs] = useState({});
  const [groupInputs, setGroupInput] = useState(initialGroupInputs);

  useEffect(() => {
    if (data) {
      let inputs = {};
      data.forEach(({ callCenter, internet, circled }) => {
        inputs[callCenter.name] = callCenter.value;
        inputs[internet.name] = internet.value;
        inputs[circled.name] = circled.value;
      });
      setclientInputs(inputs);
    }
  }, [data]);

  const handleInput = ({ target: { name, value } }) => {
    setclientInputs(groupInputs => ({ ...groupInputs, [name]: value }));
  };

  const handleGroupInput = ({ target: { name, value } }) => {
    setGroupInput(clientInputs => ({ ...clientInputs, [name]: value }));
    setclientInputs(groupInputs => {
      let inputs = {};
      data.forEach(item => inputs[item[name].name] = value);
      return { ...groupInputs, ...inputs };
    });
  };

  const handleRemoveAllValues = () => {
    setclientInputs({});
    setGroupInput(initialGroupInputs);
  };

  const handleSubmit = () => handleRemoveAllValues();

  useLayoutEffect(() => {
    fetchClientDetailLimitsData(clientId, detailLimits);
  }, [fetchClientDetailLimitsData, clientId, detailLimits]);

  const handleRefresh = () => fetchClientDetailLimitsData(clientId, detailLimits);

  const title = options.find(({ value }) => value === detailLimits).label;

  return (
    <div className="client-control-detail-limits">
      <div className="client-control-detail-limits__header">
        <div className="client-control-detail-limits__header-item">
          <FormGroup className="client-control-detail-limits__header-select" label="Detail Limits For:">
            <Select
              variant="primary"
              value={detailLimits}
              onChange={({ target: { value } }) => setDetailLimits(value)}
              options={options}
            />
          </FormGroup>
        </div>
        <div className="client-control-detail-limits__header-item">
          <ButtonGroup separated>
            <Button variant="danger" size="lg" onClick={handleRemoveAllValues}>Remove all values</Button>
            <Button variant="accent" size="lg" onClick={handleRefresh}>Refresh</Button>
            <Button variant="accent" size="lg" onClick={handleSubmit}>Submit</Button>
          </ButtonGroup>
        </div>
      </div>
      <div className="client-control-detail-limits__table">
        <Typography component="h2" className="client-control-detail-limits__table-title">{title}</Typography>
        <PrimaryTable
          cols={tableContent(clientInputs, handleInput)}
          firstRow={tableFirstRow(groupInputs, handleGroupInput)}
          loading={loading}
          data={data}
          error={error}
          retry={() => fetchClientDetailLimitsData(clientId, detailLimits)}
          variant="primary"
        />
      </div>
    </div>
  );
};

ClientControlDetailLimits.propTypes = {
  fetchClientDetailLimitsData: PropTypes.func,
  clientDetailLimits: PropTypes.object,
  clientId: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  clientDetailLimits: selectClientDetailLimits
});

const mapDispatchToProps = dispatch => ({
  fetchClientDetailLimitsData: (clientId, category) => dispatch(fetchClientDetailLimitsData(clientId, category))
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientControlDetailLimits);
