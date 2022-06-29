import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import {
  AuthProvider,
  VideoProvider,
  LikesProvider,
  WatchLaterProvider,
  FilterProvider,
  HistoryProvider,
  PlaylistModalProvider,
  PlaylistContextProvider
} from "./hooks";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <PlaylistModalProvider>
          <PlaylistContextProvider>
            <HistoryProvider>
              <WatchLaterProvider>
                <LikesProvider>
                  <FilterProvider>
                    <VideoProvider>
                      <App />
                    </VideoProvider>
                  </FilterProvider>
                </LikesProvider>
              </WatchLaterProvider>
            </HistoryProvider>
          </PlaylistContextProvider>
        </PlaylistModalProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
