import axios from "axios";
import { useEffect, useState } from "react";
import "./mouse-event.css";

export default function MouseDemo() {
  const [mobiles, setMobiles] = useState([{ img_src: "" }]);
  const [previewsrc, setPreviewsrc] = useState("m1.png");

  useEffect(() => {
    axios.get("mobile.json").then((response) => setMobiles(response.data));
  }, []);

  function handleMouseOver(e) {
    setPreviewsrc(e.target.src);
  }
  return (
    <div className="container-fluid">
      <div className="row mt-4 ">
        <div className="col-1">
          {mobiles.map((mobile, idx) => (
            <div key={idx} className="my-2">
              <img
                src={mobile.img_src}
                height={100}
                width={100}
                onMouseOver={handleMouseOver}
              />
            </div>
          ))}
        </div>
        <div className="col-11 ">
          <img src={previewsrc} width={300} height={400} />
        </div>
      </div>
    </div>
  );
}
