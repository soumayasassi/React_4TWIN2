import React from "react";
import { useLocation } from "react-router-dom";

function Child2Outlet() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h2>Child 2 Component</h2>
      <p>This is Child 2 content.</p>
      <p>state send by my father {location.state.message}</p>
    </div>
  );
}

export default Child2Outlet;
