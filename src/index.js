import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactBreakpoints from 'react-breakpoints';
// Store
import { store } from 'redux/store';
// App
import App from './app';
// Styles
import './index.sass';
import 'simplebar/dist/simplebar.min.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'flatpickr/dist/themes/material_green.css';

const breakpoints = {
  xs: 461,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1171,
  xxl: 1201,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ReactBreakpoints breakpoints={breakpoints} debounceResize={true} debounceDelay={50}>
          <App />
        </ReactBreakpoints >
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
