import React from "react";
import ReactDOM from "react-dom";
import AdminApp from 'admin-app/index';
import Player from 'player-app/index';
// Styles
import './index.sass';
import 'simplebar/dist/simplebar.min.css';
import 'pure-react-carousel/dist/react-carousel.es.css';

if (process.env.REACT_APP_BUILD_TARGET.trim() === 'admin') {
  ReactDOM.render(
    <React.StrictMode>
      <AdminApp />
    </React.StrictMode>,
    document.getElementById("root")
  );
}
if (process.env.REACT_APP_BUILD_TARGET.trim() === 'player') {
  ReactDOM.render(
    <React.StrictMode>
      <Player />
    </React.StrictMode>,
    document.getElementById("root")
  );
}
