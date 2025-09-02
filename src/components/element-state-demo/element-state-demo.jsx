import { useState } from "react";

export function ElementStateDemo() {
  const [msg, setMsg] = useState("");
  const [username, setUsername] = useState("");

  function handleFocus() {
    setMsg(`Name should be in block letters`);
  }

  function handleBlur() {
    setMsg("");
    setUsername(username.toUpperCase());
  }

  function handleInput(e) {
    setUsername(e.target.value);
  }
  return (
    <div className="container-fluid">
      <h3>Register User</h3>
      <dl>
        <dt>User Name</dt>
        <dd>
          <input
            type="text"
            value={username}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleInput}
          />
        </dd>
        <dd className="text-warning">{msg}</dd>
      </dl>
    </div>
  );
}
