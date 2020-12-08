import React from 'react';
// Styles
import './row-group.sass';

const RowGroup = ({ children }) => {
  return (
    <div className="row-group">
      {children}
    </div>
  );
};

export default RowGroup;
