import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom";
import { AuthProvider } from "./hooks/context/auth-context";
// import {FilterProvider}
import { makeServer } from "./server";
import { VideoProvider } from "./hooks/context/video-context";
import { FilterProvider } from "./hooks/context/filter-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <AuthProvider>
    <FilterProvider>
    <VideoProvider>
    <App />
    </VideoProvider>
    </FilterProvider>
    </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
