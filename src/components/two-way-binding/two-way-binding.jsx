import { useState } from "react";

export function TwoWayBinding() {
  const [user, setUser] = useState("John");

//   function handleUserChange(e) {
//     setUser(e.target.value);
//   }

// function handleInsertClick(){
//     console.log(`Inserted...`)
// }
  return (
    <div className="container-fluid">
      <h2>Edit Details</h2>
      <dl>
        <dt>User Name</dt>
        <dd>
          <input type="text" onChange={handleUserChange} value={user} />
        </dd>
      </dl>
      <p>Hello! {user}</p>

      {/* <h2>Events</h2>
      <button onClick={handleInsertClick}>Insert</button> */}
    </div>
  );
}
