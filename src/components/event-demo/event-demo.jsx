import { useState } from "react";
export function EventDemo(){
    const [msg,setMsg] = useState('');
    const [pstmsg,setPstMsg] = useState('');

    function handleCopy(){
        setMsg('Message copied');
    }

    //We can't directly update the actual dom so, we have to do in the below provided way
    function handlePaste(){
        document.onpaste = function(){
            return false;
        }
        setPstMsg('Pasting is disabled');
    }
    return(
        <div className="container-fluid">
            <h2>Bank Details</h2>
            <dl>
                <dt>Account Number</dt>
                <dd><input type="text" onCopy={handleCopy}/></dd>
                <dd>{msg}</dd>
                <dt>Verify Account</dt>
                <dd><input type="text"  onPaste={handlePaste}/></dd>
                <dd>{pstmsg}</dd>
            </dl>
        </div>
    )
}