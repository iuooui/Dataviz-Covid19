import React from "react";
import ReactDOM from "react-dom";
import NavigationBar from "./Components/NavigationBar";
import Dashboard from "./Components/Dashboard";

ReactDOM.render(<NavigationBar />, document.getElementById("navigation"));
ReactDOM.render(<Dashboard />, document.getElementById("dashboard"));
