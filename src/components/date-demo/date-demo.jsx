import { useState } from "react";

export function DateDemo() {
  const [today, setToday] = useState(Date());
  return (
    <div>
      <h1>Date</h1>
      {today}
    </div>
  );
}
