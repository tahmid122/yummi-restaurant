import React from "react";

const ToolTip = ({ isTrue }) => {
  return (
    <div className={`tooltipUni ${isTrue ? "showTooltip" : "hideTooltip"}`}>
      Successfully Added
    </div>
  );
};

export default ToolTip;
