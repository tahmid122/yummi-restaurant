import React from "react";
import { PacmanLoader } from "react-spinners";

const Loader = ({ isLoadTrue }) => {
  return (
    <div
      className="loader"
      style={{ display: `${isLoadTrue ? "none" : "flex"}` }}
    >
      <PacmanLoader color="#e48413" size={40} />
    </div>
  );
};

export default Loader;
