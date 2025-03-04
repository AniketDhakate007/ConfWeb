import Hero from '../components/hero';
import sponser from '../data/sponser';

export default function(){
    return(
        <div className='home'>
            <Hero/>
       <div className='home-first flexbox'>
       <h1>Welcome to ETRCEE-2025</h1> 
       <p>We are delighted to inform you that the International Conference on Multidisciplinary Applications and Research in Artificial Intelligence ICMARAI-26, will be held during May 23-24, 2026 in Hybrid Mode at Yeshwantrao Chavan College of Engineering (YCCE) Nagpur, India. The ICMARAI-26 (Phase I) is jointly organized by the Department of Information Technology, YCCE and Shri Guru Gobind Singhji Institute of Engineering and Technology (SGGSIE&T), Nanded. and YCCE. On behalf of the Organizing Committee of ICMARAI-26, we take the pleasure to invite you to participate and attend the ICMARAI-26 (Hybrid Mode) with opportunities to discuss and explore AI and advancements in science, engineering and technology from various application domain point of view with fellow students, academicians, researchers and practitioners. Conference may concern any topic within the conference scope. ICMARAI-26 is dedicated to magnify the understanding role of advancement in science, engineering and technology, how these advancements are applied and evolved for various real-life application domain problems. This conference will provide a platform for bringing the prominent literature and substantial research across the applications of the science, engineering and technology and provide a synopsis of the recent advanced happenings. ICMARAI-26 is an opportunity for the participants to share their research work and to listen the eminent academicians, researchers and practitioners through keynote talks and to get the insight of their carried research work and enhancement possibilities</p>
        </div> 
        <div className='home-sponser'>
            <h1>Sponsers</h1>
<div className='flexbox-spacearound'>
{sponser.map((sponser,index)=><div><img key={index} src={sponser}/></div>)}
</div>
        </div>
        </div>
    )
}