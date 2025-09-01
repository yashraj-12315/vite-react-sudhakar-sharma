import { useState } from "react";

export function PasswordDemo() {
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [progressBar, setProgressBar] = useState("");
  const [progressStyle, setProgressStyle] = useState({ width: "" });

  function handlepasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleKeyUp() {
    if (password.match(/(?=.*[A-Z])\w{4,15}/)) {
      setMsg(`Strong Password`);
      setProgressBar(
        "progress-bar bg-success progress-bar-animated progress-bar-striped"
      );
      setProgressStyle({ width: "100%" });
    } else {
      if (password.length < 4) {
        setMsg("Poor Password -min 4 chars required");
        setProgressBar(
          "progress-bar bg-danger progress-bar-animated progress-bar-striped"
        );
        setProgressStyle({ width: "30%" });
      } else {
        setMsg("Weak Password - atleast 1 uppercase is required");
        setProgressBar(
          "progress-bar bg-warning progress-bar-animated progress-bar-striped"
        );
        setProgressStyle({ width: "70%" });
      }
    }
  }
  return (
    <div className="container-fluid">
      <h2>Register</h2>
      <dl className="w-25">
        <dt>Your Password</dt>
        <dd>
          <input
            type="password"
            onKeyUp={handleKeyUp}
            onChange={handlepasswordChange}
            className="form-control"
          />
        </dd>
        <dd className="progress">
          <div className={progressBar} style={progressStyle}></div>
        </dd>
        <dd style={{ fontSize: "12px" }}>{msg}</dd>
      </dl>
    </div>
  );
}
