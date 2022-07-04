import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>404 - How did you even get here?</h1>
      <h2>Do kindly let me know if I've made a mistake somewhere.</h2>
      <Link to="/">Back to reality</Link>
    </>
  );
};

export default NotFound;
