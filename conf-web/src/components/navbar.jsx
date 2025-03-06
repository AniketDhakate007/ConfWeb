import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function(){
   
    return(
        <div className="navbar flexbox">
            <div className='nav-one flexbox-spacearound'>
            <Link to="/">Home</Link>
            <Link to="/advboard">Advisory Board</Link>
            <Link to="/commitee">Committees</Link>
            <Link to="/kspeaker">Keynote Speakers</Link>
            <Link to="/authors">Call for Papers</Link>
            <Link to="/register">Registration</Link>
            <Link to="/program">Programme Schedule</Link>
            </div>
            <div className='nav-two flexbox-spacearound'>
            <Link to="/contact">Contact Us</Link>
            <Link to="/about">About</Link>
            </div>
        </div>
    )
}
