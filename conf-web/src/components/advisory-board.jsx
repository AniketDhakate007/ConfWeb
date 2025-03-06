import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const advisoryBoard = [
  { name: 'Dr. John Doe', title: 'Chairperson' },
  { name: 'Prof. Jane Smith', title: 'Co-Chairperson' },
  { name: 'Dr. Emily White', title: 'National Board Member' },
  { name: 'Prof. Mark Taylor', title: 'National Board Member' },
  { name: 'Dr. Sarah Green', title: 'Local Advisor' },
  { name: 'Prof. David Brown', title: 'Local Advisor' },
  { name: 'Dr. John Doe', title: 'Chairperson' },
  { name: 'Prof. Jane Smith', title: 'Co-Chairperson' },
  { name: 'Dr. Emily White', title: 'National Board Member' },
  { name: 'Prof. Mark Taylor', title: 'National Board Member' },
  { name: 'Dr. Sarah Green', title: 'Local Advisor' },
  { name: 'Prof. David Brown', title: 'Local Advisor' },
  { name: 'Dr. John Doe', title: 'Chairperson' },
  { name: 'Prof. Jane Smith', title: 'Co-Chairperson' },
  { name: 'Dr. Emily White', title: 'National Board Member' },
  { name: 'Prof. Mark Taylor', title: 'National Board Member' },
  { name: 'Dr. Sarah Green', title: 'Local Advisor' },
  { name: 'Prof. David Brown', title: 'Local Advisor' }
];

const AdvisoryBoard = () => {
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom sx={{
          marginBottom: '3rem',
          fontWeight: '900',
          fontFamily: 'Poppins',
          letterSpacing: '3px',
          textShadow: '3px 3px 8px rgba(0,0,0,0.6)',
          textTransform: 'uppercase'
        }}>
          Advisory Board
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {advisoryBoard.map((person, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                  marginBottom: '1.5rem',
                  height: '150px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <Typography variant="h5" sx={{
                    fontWeight: '800',
                    fontFamily: 'Montserrat',
                    marginBottom: '0.5rem',
                    color: '#fff',
                    letterSpacing: '1px'
                  }}>
                    {person.name}
                  </Typography>
                  <Typography variant="subtitle1" sx={{
                    fontWeight: '700',
                    fontFamily: 'Poppins',
                    color: '#ffeb3b',
                    fontSize: '1rem'
                  }}>
                    {person.title}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
};

export default AdvisoryBoard;
