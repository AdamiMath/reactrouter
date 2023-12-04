import './index.css'
import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./views/App";

const root = createRoot(document.getElementById("root"));

function Wrapper() {
  return <App />
}

root.render(<Wrapper />);
