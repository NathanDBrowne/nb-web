import React from "react";
import ReactDOM from "react-dom";

// import { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useLocation,
} from "react-router-dom";

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

// function Content() {
//   const location = useLocation();

//   const [displayLocation, setDisplayLocation] = useState(location);
//   const [transitionStage, setTransistionStage] = useState("fadeIn");

//   useEffect(() => {
//     if (location !== displayLocation) setTransistionStage("fadeOut");
//   }, [location, displayLocation]);

//   return (
//     <div
//       className={`${transitionStage}`}
//       onAnimationEnd={() => {
//         if (transitionStage === "fadeOut") {
//           setTransistionStage("fadeIn");
//           setDisplayLocation(location);
//         }
//       }}
//     >
//       <Routes location={displayLocation}>
//         <Route exact path="/" element={<Home />} />
//         <Route exact path="/codec" element={<Codec />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// }

ReactDOM.render(<App />, document.getElementById("root"));
