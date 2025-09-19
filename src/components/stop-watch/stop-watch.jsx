import { useEffect, useRef, useState } from "react";

export function StopWatch() {
  const [ms, setMs] = useState(0);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hr, setHr] = useState(0);

  const intervalRef = useRef(null);

  // These will hold actual values without causing re-renders
  const countRef = useRef(0); // Milliseconds
  const secRef = useRef(0); // Seconds
  const minRef = useRef(0); // Minutes
  const hrRef = useRef(0); // Hours

  function RunMilliSeconds() {
    countRef.current++;

    if (countRef.current === 1000) {
      countRef.current = 0;
      secRef.current++;
      setSec(secRef.current);
    }

    if (secRef.current === 60) {
      secRef.current = 0;
      setSec(0);
      minRef.current++;
      setMin(minRef.current);
    }

    if (minRef.current === 60) {
      minRef.current = 0;
      setMin(0);
      hrRef.current++;
      setHr(hrRef.current);
    }

    setMs(countRef.current);
  }

  function handleStartClick() {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(RunMilliSeconds, 1);
    }
  }

  function handleStopClick() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  return (
    <div className="container-fluid">
      <div className="mt-4 d-flex gap-3 justify-content-center mx-2">
        <div>
          <span>{hr.toString().padStart(2, "0")}</span>
          <span style={{ fontSize: "10px" }}>h</span>
        </div>
        <div>
          <span>{min.toString().padStart(2, "0")}</span>
          <span style={{ fontSize: "10px" }}>m</span>
        </div>
        <div>
          <span>{sec.toString().padStart(2, "0")}</span>
          <span style={{ fontSize: "10px" }}>s</span>
        </div>
        <div>
          <span>{ms.toString().padStart(3, "0")}</span>
          <span style={{ fontSize: "10px" }}>ms</span>
        </div>
      </div>
      <div className="d-flex justify-content-center gap-3 mt-4">
        <button onClick={handleStartClick} className="btn btn-primary">
          Start
        </button>
        <button onClick={handleStopClick} className="btn btn-danger">
          Stop
        </button>
      </div>
    </div>
  );
}
