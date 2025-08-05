import React, { useState } from "react";
import LoggerComponent from "./LoggerComponent";

const ToggleWrapper = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleComponent = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={toggleComponent}>
        {isVisible ? "Unmount Component" : "Mount Component"}
      </button>
      <hr />
      {isVisible && <LoggerComponent />}
    </div>
  );
};

export default ToggleWrapper;
