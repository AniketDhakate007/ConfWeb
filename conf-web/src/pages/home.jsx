import Hero from '../components/hero';
import sponser from '../data/sponser';
import homep from '../components/homep';
import Homep from '../components/homep';

export default function(){
    return(
        <div className='home'>
            <Hero/>
       <div className='home-first flexbox'>
       <h1>Welcome to ETRCEE-2025</h1> 
        <p>K.D.K, College of Engineering, Nagpur is established in 1984, approved by AICTE, New Delhi and Director of Technical Education, Maharashtra and affiliated to Rashtrsant Tukadoji Maharaj Nagpur University, Nagpur. Government of Maharashtra has conferred ‘A’ Grade on the basis of excellence & adequate infrastructure as well as academic achievements of student and faculty. The college runs Seven Undergraduate B.Tech. courses Civil, Mechanical, Electrical, Computer Science & Engineering, Electronics, Information Technology, Artificial Intelligence & Data Science with intake capacity of 630, Bachelor of Computer Application with Intake of 120  and three Postgraduate courses M. Tech. in Structural Engineering, Masters in Computer Application and Master of Business Administration (MBA). The National Board of Accreditation (NBA) has accredited five programmes namely Computer Science & Engineering Electronics & Telecommunication Engineering, Electrical Engineering, Civil Engineering and Mechanical Engineering. The Institute is also accredited by National Accreditation & Assessment Committee (NAAC), which ensure quality assurance to the student academics and performance. The vision of College is “Service to the Society through Quality Technical Education”.

The department of Computer Science & Engineering, Artificial Intelligence & Data Science, Information Technology and Electronics & Telecommunication Engineering has 180, 90. 60 and 90 students UG intake respectively. The departmental staffs are sponsored / deputed to various reputed institutes / industries for attending various continuing Education programmes to enhance the expertise in their respective fields. The staff participates in various Workshops and Seminars and publishes their research works in Journals, Seminars and Conferences.
</p>
        </div> 
        <div className='home-sponser'>
            <h1>Sponsers</h1>
<div className='flexbox-spacearound'>
{sponser.map((sponser,index)=><div><img key={index} src={sponser}/></div>)}
</div>
        </div>
        </div>
//  <Homep/> 
    )
}