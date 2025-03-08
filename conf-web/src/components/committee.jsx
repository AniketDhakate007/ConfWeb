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
    { name: 'Dr. J.W. Bakal', title: 'President, IETE, New Delhi' }
  ],
  'Conference Chair': [
    { name: 'Dr. A. M. Badar', title: 'Vice- Principal, KDK College of Engineering. Nagpur.' }
  ],
  'Co-Conference Chair': [
    { name: 'Dr. A.A. Jaiswal', title: 'Professor & Head, Department of Computer Science & Engineering, KDKCE' },
    { name: 'Dr. S. M. Malode', title: 'Head, Department of Artificial Intelligence & Data Science, KDKCE' },
    { name: 'Dr. R.L. Shrivastav', title: 'Chairman, Institution of Engineers (I) Nagpur Local Centre' },
    { name: 'Dr. B.P. Joshi', title: 'President, IETE Nagpur Local Chapter' }
  ],
  'Convener': [
    { name: 'Prof. A. M. Kuthe ', title: 'Asst. Professor, Department of Computer Science & Engg. KDKCE ' },
    { name: 'Dr. K. S. Chandwani', title: 'Asst. Professor, Department of Computer Science & Engg. KDKCE' }


  ],
  'Co-Convener': [
    { name: 'Prof K.Ingole', title: 'Asst. Professor, Department of Artificial Intelligence & Data Science, KDKCE' },
    { name: 'Prof. A. Nachankar', title: 'Asst. Professor, Department of Computer Science & Engg. KDKCE' }
  ],

  'Secretary': [
    { name: 'Prof. V. Surjuse', title: 'Asst. Professor, Department of Computer Science & Engg. KDKCE' },
    { name: 'Dr. A. Bhange', title: 'Head, Department of Computer Application, KDKCE' },
    { name: 'Prof. S. Kurzadkar', title: 'Asst. Professor, Department of Computer Science & Engg. KDKCE' }
  ],
  'Joint Organizing Secretary': [
     { name: 'Prof. M. Choudhari', title: 'Asst.Professor, Department of Artificial Intelligence & Data Science, KDKCE' },
    { name: 'Prof. P. Singam', title: 'Asst. Professor, Department of Computer Science & Engg. KDKCE' },
    { name: 'Prof. Chole', title: 'Asst.Professor, Department of Artificial Intelligence & Data Science, KDKCE' }
  ]

};

const Committees = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{
        background: 'linear-gradient(135deg, #32a852, #4285f4)',
        minHeight: '100vh',
        padding: '4rem 2rem',
        color: '#fff',
      }}
    >
      <Container maxWidth="1.5g">
        <Typography variant="h2" align="center" gutterBottom sx={{
          marginBottom: '3rem',
          fontWeight: '500',
          fontFamily: 'Cinzel',
          letterSpacing: '3px',
          textShadow: '3px 3px 8px rgba(0,0,0,0.6)',
          textTransform: 'uppercase',
          color: '#000'
        }}>
          Committees
        </Typography>
        {Object.entries(committees).map(([section, members], index) => (
          <Box key={index} sx={{ marginBottom: '4rem' }}>
            <Typography variant="h4" sx={{
              fontWeight: '500',
              fontFamily: 'Montserrat',
              marginBottom: '1.5rem',
              letterSpacing: '1px',
              color: '#1a1a1a',
              textAlign: 'center'
            }}>
              {section}
            </Typography>
            <Grid2 container spacing={2} justifyContent="center">
              {members.map((person, idx) => (
                <Grid2 item xs={12} sm={6} md={4} key={idx}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <Box sx={{
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(15px)',
                      borderRadius: '20px',
                      padding: '1.5rem',
                      textAlign: 'center',
                      boxShadow: '0px 15px 25px rgba(0,0,0,0.4)',
                      border: '2px solid rgba(255, 255, 255, 0.5)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease-in-out',
                      height: '150px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                      <Typography variant="h5" sx={{
                        fontWeight: '500',
                        fontFamily: 'Montserrat',
                        color: '#fff',
                        letterSpacing: '1px',
                        marginBottom: '0.5rem'
                      }}>
                        {person.name}
                      </Typography>
                      <Typography variant="subtitle1" sx={{
                        fontWeight: '200',
                        fontFamily: 'Poppins',
                        color: 'yellow',
                        fontSize: '1.25rem'
                      }}>
                        {person.title}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid2>
              ))}
            </Grid2>
          </Box>
        ))}
      </Container>
    </motion.div>
  );
};

export default Committees;
