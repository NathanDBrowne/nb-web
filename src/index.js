import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";

import Home from "./views/Home";
import "./App.css";

import "@fontsource/fira-code";

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
