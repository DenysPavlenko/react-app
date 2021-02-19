import React, { useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { clientDetailLimitsRequested } from 'redux/client-detail-limits/actions';
import { selectClientDetailLimits } from 'redux/client-detail-limits/selectors';
// Components
import Select from 'components/select';
import FormGroup from 'components/form-group';
import Button from 'components/button';
import ButtonGroup from 'components/button-group';
import Typography from 'components/typography';
import PrimaryTable from 'components/primary-table';
// Options
import options from './options';
// Table content
import tableContent from './table-content';
import tableFirstRow from './table-first-row';
// Styles
import './styles.sass';

const initialGroupInputs = {
  callCenter: '',
  internet: '',
  circled: '',
};

const DetailLimitsTab = ({ clientDetailLimitsRequested, clientDetailLimits: { loading, data, error }, clientId }) => {
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
    clientDetailLimitsRequested(clientId, detailLimits);
  }, [clientDetailLimitsRequested, clientId, detailLimits]);

  const handleRefresh = () => clientDetailLimitsRequested(clientId, detailLimits);

  const title = options.find(({ value }) => value === detailLimits).label;

  return (
    <div className="detail-limits-tab">
      <div className="detail-limits-tab__header">
        <div className="detail-limits-tab__header-item">
          <FormGroup className="detail-limits-tab__header-select" label="Detail Limits For:">
            <Select
              variant="primary"
              value={detailLimits}
              onChange={({ target: { value } }) => setDetailLimits(value)}
              options={options}
            />
          </FormGroup>
        </div>
        <div className="detail-limits-tab__header-item">
          <ButtonGroup separated>
            <Button variant="danger" onClick={handleRemoveAllValues}>Remove all values</Button>
            <Button variant="accent" onClick={handleRefresh}>Refresh</Button>
            <Button variant="accent" onClick={handleSubmit}>Submit</Button>
          </ButtonGroup>
        </div>
      </div>
      <div className="detail-limits-tab__table">
        <Typography component="h2" className="detail-limits-tab__table-title">{title}</Typography>
        <PrimaryTable
          cols={tableContent(clientInputs, handleInput)}
          firstRow={tableFirstRow(groupInputs, handleGroupInput)}
          loading={loading}
          data={data}
          error={error}
          retry={() => clientDetailLimitsRequested(clientId, detailLimits)}
        />
      </div>
    </div>
  );
};

DetailLimitsTab.propTypes = {
  clientDetailLimitsRequested: PropTypes.func,
  clientDetailLimits: PropTypes.object,
  clientId: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  clientDetailLimits: selectClientDetailLimits
});

const mapDispatchToProps = {
  clientDetailLimitsRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailLimitsTab);
