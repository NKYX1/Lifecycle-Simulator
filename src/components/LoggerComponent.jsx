import React, { useEffect, useState } from "react";

const LoggerComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mounted");

    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Unmounted");
    };
  }, []);

  useEffect(() => {
    if (count > 0) {
      console.log("Updated");
    }
  }, [count]);

  return (
    <div>
      <h2>LoggerComponent is Mounted</h2>
      <p>Counter: {count}</p>
    </div>
  );
};

export default LoggerComponent;
