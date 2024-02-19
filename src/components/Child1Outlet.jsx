import React from "react";
import { useOutletContext } from "react-router-dom";

function Child1Outlet() {
  const [user, role] = useOutletContext();
  return (
    <div>
      <h2>Child 1 Component</h2>
      <p>This is Child 1 content.</p>
      <p>
        {" "}
        the actual connected user is {user} having as a role {role}
      </p>
    </div>
  );
}

export default Child1Outlet;
