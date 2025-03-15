import {Link} from 'react-router-dom'

export default function(){
    return(
    <footer className="flexbox-column flexbox-spacearound">
        <div className="flexbox-spacearound">
            <h1>ETRCEE-25</h1>
            <div className='flexbox-column'>
                <h3>Useful Links</h3>
                <Link to="/">Home</Link>
                <Link to="#">Important Dates</Link>
                <Link to="/about">About</Link>
                <Link to="#">Call for paper</Link>
            </div>
            <div className='flexbox-column'>
                <h3>Contact Us</h3>
                <Link to="http://kdkce.in">Website</Link>
                <Link to="mailto:ritishdas116@gmail.com">Email</Link>
                <b>Mr. Bhushan Bawankar</b>
                <b>Phone: +91-9146033004</b>
                </div>
        </div>
        <p>Copyright © ETRCEE-25 - All Rights Reserved</p>
    </footer>
    )
}
