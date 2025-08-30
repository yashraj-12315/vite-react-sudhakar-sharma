import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import App from "./App.jsx";
import { Home } from "./components/home/home.jsx";
import { StateDemo } from "./components/state/statedemo.jsx";
import { DataBinding } from "./components/data-binding/data-binding.js";
import { AjaxDemo } from "./components/ajax-demo/ajax-demo.jsx";
import { AjaxArrayObjectDemo } from "./components/ajax-demo/ajax-array-object-demo.jsx";
import { DateDemo } from "./components/date-demo/date-demo.jsx";
import CustomArgument from "./components/two-way-binding/two-way-binding.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Home/> */}
    {/* <StateDemo/> */}
    {/* <DataBinding /> */}
    {/* <AjaxDemo /> */}
    {/* <AjaxArrayObjectDemo/> */}
    {/* <DateDemo/> */}
    {/* <TwoWayBinding /> */}
    <CustomArgument/>
  </StrictMode>
);
