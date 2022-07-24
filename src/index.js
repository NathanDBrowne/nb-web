import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Codec from "./views/Codec";
import NotFound from "./views/NotFound";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/codec" element={<Codec />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
