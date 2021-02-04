import React from 'react';
import PropTypes from 'prop-types';
// Components
import InfoWidget from 'components/info-widget';
// Styles
import './styles.sass';

const InfoWidgets = ({ widgets }) => {
  return (
    <div className="info-widgets">
      {widgets.map(({ id, title, value, icon, color, onClick, active }) => (
        <div key={id} className="info-widgets__widget">
          <InfoWidget title={title} value={value} icon={icon} color={color} onClick={onClick} active={active} />
        </div>
      ))}
    </div>
  );
};

InfoWidgets.propTypes = {
  widgets: PropTypes.array,
};

export default InfoWidgets;
