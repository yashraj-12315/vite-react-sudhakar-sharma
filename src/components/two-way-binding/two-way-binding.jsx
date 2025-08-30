// import { useState } from "react";

// export function TwoWayBinding() {
//   const [user, setUser] = useState("John");

// //   function handleUserChange(e) {
// //     setUser(e.target.value);
// //   }

// // function handleInsertClick(){
// //     console.log(`Inserted...`)
// // }
//   return (
//     <div className="container-fluid">
//       <h2>Edit Details</h2>
//       <dl>
//         <dt>User Name</dt>
//         <dd>
//           <input type="text" onChange={handleUserChange} value={user} />
//         </dd>
//       </dl>
//       <p>Hello! {user}</p>

//       {/* <h2>Events</h2>
//       <button onClick={handleInsertClick}>Insert</button> */}
//     </div>
//   );
// }

const CustomArgument = () => {
  function handleClick(e, msg, list, rating) {
    console.log(`
            Button Id:${e.target.id} \n
            Button Value:${e.target.value} \n
            X Position: ${e.clientX} \n
            Message: ${msg} \n
            List: ${list} \n
            Rating:${rating.Rate}
            `);
  }
  return (
    <div className="container-fluid">
      <h2 style={{border:'2px solid black',padding:'20px',backgroundColor:'#00ffff'}}>Events</h2>
      <button
        id="btnInsert"
        value="Insert"
        onClick={(event) =>
          handleClick(event, "Yash", ["Delhi", "Mumbai"], { Rate: 4.2 })
        }
      >
        Insert
      </button>
    </div>
  );
};

export default CustomArgument;
