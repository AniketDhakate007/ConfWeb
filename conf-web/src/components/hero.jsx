import {useNavigate} from "react-router-dom";
export default function(){
  const navigate = useNavigate();
    return(
        <div className="hero flexbox-spacearound">
            <div className="flexbox-column flexbox">
<h1>
International Conference on Emerging Trends and Research in Computer & Electronics Exigencies - 2025
            </h1>
            <p>
Organized by Department of Computer Science and Engineering & Artificial Intelligence and Data Science, KDKCE ,Nagpur.
            </p>
            <div className="flexbox hero-button">
                <button onClick={()=>{navigate('/register')}}>Register</button>
                <span onClick={()=>{navigate('/about')}}>Learn more</span>
            </div>
            </div>
<h1>
ETRCEE-25
</h1>
</div>
    )
}
