
import { createRoot } from "react-dom/client";
import { users } from "./db/user.js";
import players from "./db/player.js";
import "./index.css";
import App from "./App.jsx";


createRoot(document.getElementById("root")).render(

    
    <App users={users} players={players} />


);
