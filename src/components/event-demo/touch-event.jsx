import { useState } from "react"

export function TouchEvent(){

    const [msg,setMsg] = useState('');

    function GetDetails(details){
        setMsg(details);
    }
    return(
        <div className="container-fluid">
            <h2>Touch Event Demo</h2>
            <p>Touch events are primarily used in mobile devices to handle user interactions through touch gestures.</p>    
            <img src="python.png" alt="" onTouchStart={()=>GetDetails('New Python Batch Starts 26-May-2025')}  width={200} height={200} className="mx-4 mt-4"/>
            <img src="oracle.png" alt="" onTouchStart={()=>GetDetails('New Oracle Batch Starts 30-May-2025')} width={200} height={200} className="mx-4 mt-4"/>
            <h2>{msg}</h2>
        </div>
    )
}