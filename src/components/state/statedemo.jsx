import { useEffect, useState } from "react";

export function StateDemo() {
  const [title, setTitle] = useState("Welcome to react State Management");

  useEffect(() => {
    setTitle("Welcome Yash");
  }, []);

  return (
    <div>
      <h3>State Demo</h3>
      <p>{title}</p>
    </div>
  );
}
