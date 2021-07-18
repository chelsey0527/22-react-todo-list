import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import Home from "./pages/Home/index";

ReactDom.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>,
    document.getElementById("root")
);
