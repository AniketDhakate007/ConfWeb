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
          <Link to="/authors">Call for Papers</Link>
          <Link to="/register">Registration</Link>
          <Link to="/program">Programme Schedule</Link>
        </div>

        <div className={`nav-two ${isOpen ? "nav-open" : ""}`}>
          <Link to="/contact">Contact Us</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}
