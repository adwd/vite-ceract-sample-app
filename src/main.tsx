import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { HashRouter, Route, Routes } from "react-router-dom";

const About = React.lazy(() => import("./About"));

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/about"
          element={
            <React.Suspense fallback={<></>}>
              <About />
            </React.Suspense>
          }
        />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
