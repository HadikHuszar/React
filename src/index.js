import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ReactMemoryGame from "./index_almostworking";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ReactMemoryGame />
  </StrictMode>,
  rootElement
);