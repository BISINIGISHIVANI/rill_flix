import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom";
import { AuthProvider } from "./hooks/context/auth-context";
import { makeServer } from "./server";
import { VideoProvider } from "./hooks/context/video-context";
import { FilterProvider } from "./hooks/context/filter-context";
import {LikeVideoContextProvider} from "./hooks/context/likes-context"
import{ WatchLaterProvider} from "./hooks/context/watchlater-context"
import { HistoryVideoContextProvider } from "./hooks/context/history-context";



// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <HistoryVideoContextProvider>
          <WatchLaterProvider>
            <LikeVideoContextProvider >
              <FilterProvider>
                <VideoProvider>
                  <App />
                </VideoProvider>
              </FilterProvider>
            </LikeVideoContextProvider>
          </WatchLaterProvider>
        </HistoryVideoContextProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
