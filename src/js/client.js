import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";
import LayoutTwo from "./components/LayoutTwo";

const app = document.getElementById('app');
const appTwo = document.getElementById('appTwo');
ReactDOM.render(<Layout/>, app);
ReactDOM.render(<LayoutTwo/>, appTwo);