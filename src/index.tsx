import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import reducer, { initialState, State, Action } from "./components/reducer";
import { StateProvider } from "./components/StateProvider";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <StateProvider<State, Action> initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
);

reportWebVitals(console.log);
