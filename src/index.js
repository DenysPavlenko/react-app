import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactBreakpoints from 'react-breakpoints';
// Store
import { store } from './redux/store';
// Components
import App from './App';
// Styles
import './index.sass';
import 'simplebar/dist/simplebar.min.css';

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
