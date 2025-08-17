import { useState } from "react";

export function DataBinding() {
  const [price] = useState(450000);
  return (
    <div>
      <h2>Data Binding </h2>
      {/* <p>Price:{price.toLocaleString('en-IN',{style:'currency',currency:'INR'})}</p> */}
      <p>Price:{price.toLocaleString('en-IN',{notation:'compact'})}</p>
      <input type="text" value={price} />
    </div>
  );
}
