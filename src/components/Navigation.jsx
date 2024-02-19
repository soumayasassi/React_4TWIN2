import React from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/about")}>Go to About Page</button>
      <button onClick={() => navigate(1)}>handleForwardClick </button>
      <button onClick={() => navigate(-1)}>handleBackwardClick </button>
    </div>
  );
};

export default Navigation;
