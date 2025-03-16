import React from 'react';
import { Container, Box, Typography, Grid, Grid2 } from '@mui/material';
import { motion } from 'framer-motion';

const committees = {
  'Chief Patron': [
    { name: 'Mrs. Sumanmala B. Mulak', title: 'Chairperson, BCYRC, Nagpur' }
  ],
  'Patrons': [
    { name: 'Mr. Rajendra B. Mulak', title:'BCYRC, Ex- Minister, Govt of Maharashtra' },
    { name: 'Mr. Yashraj R. Mulak', title: 'Treasurer, BCYRC' },
    { name: 'Dr. V. P. Varghese', title: 'Principal, KDK College of Engineering, Nagpur' },

  ],
  'Conference Chair': [
    { name: 'Dr. A. M. Badar', title: 'Vice- Principal, KDK College of Engineering. Nagpur.' }
  ],
  'Co-Conference Chair': [
    
    { name: 'Er.Satish Raipure', title: 'Chairman, Institution of Engineers (I) Nagpur Local Centre' },
    { name: 'Dr. V.H. Mankar', title: 'President, IETE Nagpur Local Chapter' }
  ],
  'Convener': [
    { name: 'Dr. A.A. Jaiswal', title: 'Professor & Head, Department of Computer Science & Engineering, KDKCE' },
    { name: 'Dr. S. M. Malode', title: 'Head, Department of Artificial Intelligence & Data Science, KDKCE' },
    


  ],
  'Co-Convener': [
    { name: 'Prof. A. M. Kuthe ', title: 'Asst. Professor, Department of Computer Science & Engg. KDKCE ' },
    { name: 'Dr. K. S. Chandwani', title: 'Asst. Professor, Department of Computer Science & Engg. KDKCE' }
   
  ],

  'Organinsing Secretary': [
    { name: 'Dr. A.D. Bhange', title: 'Head, Department of Computer Application, KDKCE' },
    { name: 'Prof. V.R. Surjuse', title: 'Asst. Professor, Department of Computer Science & Engg. KDKCE' },
  ],
  'Joint Organizing Secretary': [
    { name: 'Prof. S.A. Kurzadkar', title: 'Asst. Professor, Department of Computer Science & Engg. KDKCE' },
    { name: 'Prof K.K.Ingole', title: 'Asst. Professor, Department of Artificial Intelligence & Data Science, KDKCE' },
    { name: 'Prof. A.P. Nachankar', title: 'Asst. Professor, Department of Computer Science & Engg. KDKCE' }
  ]

};

const Committees = () => {
  const containerStyle = {
    background: 'linear-gradient(135deg, #32a852, #4285f4)',
    minHeight: '100vh',
    padding: '4rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const titleStyle = {
    color: '#000',
    fontSize: '2.5rem',
    marginBottom: '3.5rem',
    fontFamily: 'Montserrat',
    textAlign: 'center',
  };

  const sectionTitleStyle = {
    color: '#000',
    fontSize: '2rem',
    margin: '2rem 0 1rem 0',
    marginBottom: '2.5rem',
    fontFamily: 'Montserrat',
    textAlign: 'center'
  };

  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: '1400px',
  };

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.15',
    borderRadius: '15px',
    padding: '1.5rem',
    boxShadow: '0px 10px 30px rgba(0,0,0,0.2)',
    cursor: 'pointer',
    fontFamily: 'Montserrat',
    textAlign: 'center',
    transition: 'transform 0.1s ease-in-out',
    minWidth: '300px',
    maxWidth: '450px',
    margin: '1rem',
    wordBreak: 'break-word',
    marginBottom: '4rem',
  };

  const nameStyle = {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#fff',
  };

  const titleTextStyle = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#333',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Committees</h1>
      {Object.entries(committees).map(([section, members], idx) => (
        <div key={idx} style={{ width: '100%', maxWidth: '1400px' }}>
          <h2 style={sectionTitleStyle}>{section}</h2>
          <div style={cardContainerStyle}>
            {members.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                style={cardStyle}
              >
                <h2 style={nameStyle}>{member.name}</h2>
                <p style={titleTextStyle}>{member.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Committees;
