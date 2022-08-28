import React from "react";
import ReactDOM from "react-dom/client";
import C1 from "./components/C1";
import T1 from "./components/T1";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <C1 isim={[1, 2, 3, 4, 5]} />
    <T1 />
  </>
);
