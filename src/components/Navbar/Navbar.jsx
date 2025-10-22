import logo from "..//../assets/image/real-madrid-c-f-seeklogo.png";
import reg from "..//../assets/image/icons8-registration-64.png";
import user from "..//../assets/image/3d_user_folder_20516.png";
import chemp from "..//../assets/image/pngwing.com.png";
import laliga from "..//../assets/image/LALIGA_RGB_h_monocromatico_positivo.png";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logopage">
        <div className="alllogo">
          <img src={logo} alt="" className="logopng" />
          <div className="minilogos">
            <img src={chemp} alt="" className="logopng1" />
            <img src={laliga} alt="" className="logopng1" />
          </div>
        </div>

        <div className="middlenav">
          <ul>
            <NavLink to="/home" className="li">
              <li>Գլխավոր Էջ</li>
            </NavLink>
            <NavLink to="/his" className="li">
              <li>Ակումբի Պատմություն </li>
            </NavLink>
            <NavLink to="/error" className="li">
              <li>Կապ Մեզ Հետ</li>
            </NavLink>
          </ul>
        </div>
        <div className="endingnav">
          <NavLink to="/registration">
            <img src={reg} alt="" className="minilogo" />{" "}
          </NavLink>
          <NavLink to={"/user"}>
            <img src={user} alt="" className="minilogo" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
