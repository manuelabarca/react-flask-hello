//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Layout from "./layout";

import io from "socket.io-client";
const socket = io(process.env.BACKEND_URL);

//render your react application
ReactDOM.render(<Layout socket={socket} />, document.querySelector("#app"));
