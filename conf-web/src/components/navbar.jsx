import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";
import "./navbar.css";

export default function () {
  return (

    <nav className="navbar">
      <div className="nav-container">

        <div className={`nav-one`}>
          <Link to="/">Home</Link>
          <Link to="/advboard">Advisory Board</Link>
          <Link to="/commitee">Committees</Link>
          <Link to="/kspeaker">Keynote Speakers</Link>
          <div className="dropdown"><span>For Authors</span>
          <div>
<Link to="/about">Call for Paper</Link>
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
<Link to="/about">About College</Link>
<Link to="/about">Theme and Scope</Link>
          </div>
          </div>
        </div>

      </div>
    </nav>
  );
}
