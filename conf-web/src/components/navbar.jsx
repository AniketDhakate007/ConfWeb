import { Link } from "react-router-dom";
import "./navbar.css";

export default function () {
  return (

    <nav className="navbar">
      <div className="nav-container">

        <div className={`nav-one`}>
          <Link to="/">Home</Link>
          <Link to="/advboard">Advisory Board</Link>
          <Link to="/commitee">Committees</Link>
          <div className="dropdown"><span>For Authors</span>
          <div>
<Link to="/call_for_papers">Call for Paper</Link>
<Link to="/about">Important Dates</Link>
<Link to="/about">Paper Format</Link>
<Link to="/about">Paper Submission</Link>
          </div>
          </div>
          <Link to="/register">Registration</Link>
          <Link to="/program">Programme Schedule</Link>
        </div>

        <div className={`nav-two`}>
          <Link to="/contact">Contact Us</Link>
          <div className="dropdown"><span>About</span>
          <div>
<Link
  to="#"
  onClick={() => window.open('https://www.kdkce.edu.in/', '_blank', 'noopener,noreferrer')}
>
  About College
</Link>
<Link to="/Theme-scope">Theme and Scope</Link>
          </div>
          </div>
        </div>

      </div>
    </nav>
  );
}
