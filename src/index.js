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
import {LikeVideoContextProvider} from "./hooks/context/likes-context"
import{ WatchLaterProvider} from "./hooks/context/watchlater-context"
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <AuthProvider>
    <WatchLaterProvider>
    <LikeVideoContextProvider >
    <FilterProvider>
    <VideoProvider>
    <App />
    </VideoProvider>
    </FilterProvider>
    </LikeVideoContextProvider>
    </WatchLaterProvider>
    </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
