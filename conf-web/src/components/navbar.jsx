import { Link } from "react-router-dom";
import "./navbar.css";
import Dropdown from "./dropdown";
import Dropdown2 from "./dropdown2";

export default function () {
  return (

    <nav className="navbar">
      <div className="nav-container">

        <div className={`nav-one`}>
          <Link to="/">Home</Link>
          <Link to="/advboard">Advisory Board</Link>
          <Link to="/commitee">Committees</Link>
          <Dropdown></Dropdown>
          <Link to="/register">Registration</Link>
          <Link to="/program">Programme Schedule</Link>
        </div>

        <div className={`nav-two`}>
          <Link to="/contact">Contact Us</Link>
        <Dropdown2></Dropdown2>
        </div>

      </div>
    </nav>
  );
}
