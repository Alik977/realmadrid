import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Registration from "./components/Registration/Registration.jsx";
import Realmadridhis from "./components/RealmadridHistory/Realmadridhis.jsx";
import Users from "./components/Users/Users.jsx";
import Error from "./components/Error/Error.jsx";
import Header from "./components/Header/Header.jsx";
import Players from "./components/Players/Players.jsx";
import Legends from "./components/Players/Legends.jsx";

import "./App.css";

function App({ users, players }) {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/home" element={<Header />} />
        <Route path="/his" element={<Realmadridhis />} />
        <Route path="/players/:id" element={<Players players={players} />} />
        <Route path="/legends" element={<Legends players={players} />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/user" element={<Users users={users} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
