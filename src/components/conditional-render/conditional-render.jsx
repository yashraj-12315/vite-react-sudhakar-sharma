import { useState } from "react";
import { EmiCalculator } from "../emi-calculator/emi-calculator";
import { CarouselDemo } from "../carousel-demo/carousel-demo";

export function ConditionalRender() {
  const [component, setComponent] = useState("");

  function loadComponent(cname) {
    if (cname === "emi") {
      setComponent(<EmiCalculator />);
    } else if (cname === "carousel") {
      setComponent(<CarouselDemo />);
    }
  }
  return (
    <div className="container-fluid">
      <button
        onClick={() => {
          loadComponent("emi");
        }}
      >
        EMI Calculator
      </button>
      <button
        onClick={() => {
          loadComponent("carousel");
        }}
      >
        Carousel Demo
      </button>
      <hr />
      <div className="mt-4">{component}</div>
    </div>
  );
}
