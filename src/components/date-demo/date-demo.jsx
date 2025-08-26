import { useEffect, useState } from "react";
import moment from "moment";

export function DateDemo() {
  const [today, setToday] = useState();

  useEffect(()=>{
    var now = new Date('2025-06-22');
    setToday(moment(now).format('dddd Do, MMMM yyyy'))
  },[])
  return (
    <div>
      <h1>Date</h1>
      {today}
    </div>
  );
}
