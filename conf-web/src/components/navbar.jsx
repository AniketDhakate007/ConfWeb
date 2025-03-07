import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="menu-button"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <div className={`nav-one ${isOpen ? "nav-open" : ""}`}>
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

        <div className={`nav-two ${isOpen ? "nav-open" : ""}`}>
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
