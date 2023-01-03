import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";

import "./global.css";
import Router from "./Router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  </React.StrictMode>
);
