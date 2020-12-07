import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactBreakpoints from 'react-breakpoints';
// Store
import { store } from './redux/store';
// Components
import AppRoot from 'player-app/app-root';

const breakpoints = {
  xs: 461,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1171,
  xxl: 1201,
};

const PlayerApp = () => {
  return (
    <Provider store={store}>
      <Router>
        <ReactBreakpoints breakpoints={breakpoints} debounceResize={true} debounceDelay={50}>
          <AppRoot />
        </ReactBreakpoints >
      </Router>
    </Provider>
  )
};

export default PlayerApp;
