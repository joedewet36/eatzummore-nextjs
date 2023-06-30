import React from "react";
import ReactDOMClient from "react-dom/client";
import { IphoneProX } from "./screens/IphoneProX";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<IphoneProX />);
