import React from "react";
import { PropagateLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center ">
      <PropagateLoader color="#1f7445" />
    </div>
  );
};

export default Loading;
