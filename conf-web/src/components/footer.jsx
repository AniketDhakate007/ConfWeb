import {Link} from 'react-router-dom'

export default function(){
    return(
    <footer className="flexbox-column flexbox-spacearound">
        <div className="flexbox-spacearound">
            <h1>ETRCEE-25</h1>
            <div className='flexbox-column'>
                <h3>Useful Links</h3>
                <Link to="/">Home</Link>
                <Link to="/imp_dates">Important Dates</Link>
                <Link to="https://www.kdkce.edu.in/">About</Link>
                <Link to="call_for_Papers">Call for paper</Link>
            </div>
            <div className='flexbox-column'>
                <h3>Contact Us</h3>
                <Link to="https://www.kdkce.edu.in/">Website</Link>
                <Link to="mailto: kartik.ingole@kdkce.edu.in ">Email</Link>

                <b>Prof. k.K Ingole</b>
                <b>Phone: +91-85549 25786</b>
                </div>
        </div>
        <p>Copyright © ETRCEE-25 - All Rights Reserved</p>
    </footer>
    )
}
