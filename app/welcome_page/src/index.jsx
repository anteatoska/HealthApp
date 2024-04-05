import React from "react";
import ReactDOMClient from "react-dom/client";
import { WelcomePage } from "./screens/WelcomePage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<WelcomePage />);
