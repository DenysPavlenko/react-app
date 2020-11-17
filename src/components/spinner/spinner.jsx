import React from 'react';
// Styles
import './spinner.sass';

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="spinner-inner">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
