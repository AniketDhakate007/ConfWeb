import { Link } from "react-router-dom";



export default function () {
  return (

    <header className="navbar">
    <span>Menu</span>

    <div className="nav-container">

    <div className='nav-one'>
    <Link to="/">Home</Link>
    <Link to="/advboard">Advisory Board</Link>
    <Link to="/commitee">Committees</Link>

    {/* <Link to="/kspeaker">Keynote Speakers</Link> */}
    <div className="dropdown"><span>For Authors</span>
    <div>
    <Link to="/call_for_Papers">Call for Paper</Link>
    <Link to="/about">Important Dates</Link>
    <Link to="/">Paper Submission</Link>
    </div>
    </div>

    <Link to="/register">Registration</Link>
    {/* <Link to="/program">Programme Schedule</Link> */}
    </div>

    <div className='nav-two'>
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
    </header>

  );
}
/*
   { name: 'Call For Papers', path: '/call_for_papers' },
    { name: 'Important Dates', path: '/about' },
    { name: 'Paper Format', path: '/' },
    { name: 'Paper Submission', path: '/' }
 * */
