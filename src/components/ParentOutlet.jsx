import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

 

function ParentOutlet() {
    
    const [user] = useState("foulen ben foulen")
    const [role] = useState("ROLE_ADMIN")
  return (
    <div>
         {/*<Lazy></Lazy>*/}
      <h1>Parent Component</h1>
      <nav>
        <ul>
          <li>
            <Link to="/parent/child1" reloadDocument replace>Child 1</Link>
          </li>
          <li>
            <Link to="/parent/child2" state={{ message: "Message For Child 2 " }}>Child 2</Link>
         
          </li>
        </ul>
      </nav>
      {/* Outlet pour afficher les routes enfants 
      
      <Navigation></Navigation>*/}
      <Outlet context={[user,role]} />
    </div>
  );
}

export default ParentOutlet;
