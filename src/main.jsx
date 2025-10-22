import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { users } from "./db/user.js";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(

    
    <App users={users} />

);
