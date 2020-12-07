import React from "react";
import ReactDOM from "react-dom";
// Styles
import './index.sass';
import 'simplebar/dist/simplebar.min.css';
import 'pure-react-carousel/dist/react-carousel.es.css';

const BUILD_TARGETS = [
  {
    name: "admin",
    path: "./admin-app",
  },
  {
    name: "player",
    path: "./player-app",
  },
];

// Determine which entry point to import
const { path } = BUILD_TARGETS.find(({ name }) => process.env.REACT_APP_BUILD_TARGET.trim() === name);

// Import the entry point and render its default export
import(`${path}`).then(({ default: BuildTarget }) =>
  ReactDOM.render(
    <React.StrictMode>
      <BuildTarget />
    </React.StrictMode>,
    document.getElementById("root")
  )
);
