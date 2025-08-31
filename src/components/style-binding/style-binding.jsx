import React, { useEffect, useState } from "react";

const StyleBinding = () => {
  const [effect, setEffect] = useState({
    color: "red",
    backgroundColor: "yellow",
  });

  useEffect(() => {
    setEffect({ color: "green", backgroundColor: "pink" });
  }, []);
  return (
    <div>
      <h2 style={effect}>React Style Binding</h2>
    </div>
  );
};

export default StyleBinding;
