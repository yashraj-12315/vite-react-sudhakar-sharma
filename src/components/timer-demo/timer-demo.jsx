import { useRef, useState } from "react";

export function TimerDemo() {
  const [msg, setMsg] = useState("Volume 0%");
  let thread = useRef(null);

  function Level1() {
    setMsg(`Volume increased to 20%`);
  }
  function Level2() {
    setMsg(`Volume increased to 70%`);
  }
  function Level3() {
    setMsg(`Volume increased to 100%`);
  }

  function handleButtonClick() {
    setTimeout(Level1, 1000);
    thread.current = setTimeout(Level2, 2000);
    // Level2();
    // Level3();
    setTimeout(Level3, 5000);
  }

  function handleCancelClick() {
    clearInterval(thread.current);
  }
  return (
    <div className="container-fluid">
      <div className="mt-4">
        <button className="btn btn-warning mx-2" onClick={handleCancelClick}>
          Cancel Level2
        </button>
        <button
          className="btn btn-primary bi bi-volume-up"
          onClick={handleButtonClick}
        ></button>
        <span className="mx-2">{msg}</span>
      </div>
    </div>
  );
}
