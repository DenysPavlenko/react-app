import React from 'react';
import PropTypes from 'prop-types';
// Components
import InfoWidget from 'shared/components/info-widget/info-widget';
// Styles
import './info-widgets.sass';

const InfoWidgets = ({ widgets }) => {
  return (
    <div className="info-widgets">
      {widgets.map(({ id, title, value, icon, color, onClick }) => (
        <div key={id} className="info-widgets__widget">
          <InfoWidget title={title} value={value} icon={icon} color={color} onClick={onClick} />
        </div>
      ))}
    </div>
  );
};

InfoWidgets.propTypes = {
  widgets: PropTypes.array,
};

export default InfoWidgets;
