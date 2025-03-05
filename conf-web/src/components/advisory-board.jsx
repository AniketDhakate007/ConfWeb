import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import '@fontsource/poppins';
import '@fontsource/montserrat';

import Ghost from '../assets/G.jpeg';
import Price from '../assets/P.jpeg';
import Soap from '../assets/S.jpeg';

const mainChairPersons = [
  { name: 'Dr. John Doe', title: 'Chief AI Scientist', image: Ghost},
  { name: 'Dr. John Doe', title: 'Chief AI Scientist', image: Soap},
  { name: 'Dr. Jane Smith', title: 'Data Scientist', image: Price },
  { name: 'Dr. Jane Smith', title: 'Data Scientist', image: Price },
  { name: 'Dr. Jane Smith', title: 'Data Scientist', image: Price }
];

const nationalBoard = [
  { name: 'Dr. Alan Turing', title: 'Mathematician', image: Ghost },
  { name: 'Dr. Grace Hopper', title: 'Computer Scientist', image: Soap }
];

const localAdvisors = [
  { name: 'Dr. Ada Lovelace', title: 'Programmer', image: Soap },
  { name: 'Dr. Claude Shannon', title: 'Information Theorist', image: Ghost }
];

const AdvisoryBoard = () => {
  const renderAdvisors = (advisors) => advisors.map((advisor, index) => (
    <Grid item xs={12} sm={6} md={3} key={index}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1, ease: 'easeOut' }}
      >
        <Box sx={{
          backgroundColor: 'transparent',
          borderRadius: '15px',
          overflow: 'hidden',
          boxShadow: '0px 10px 25px rgba(0,0,0,0.3)',
          textAlign: 'center',
          width: '100%',
          margin: '0 auto',
          position: 'relative',
          paddingBottom: '1rem'
        }}>
          <img src={advisor.image} alt={advisor.name} style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '15px' }} />
          <Box sx={{
            padding: '1rem',
            textAlign: 'center'
          }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.3rem', color: '#fff', fontFamily: 'Poppins' }}>
              {advisor.name}
            </Typography>
            <Typography variant="subtitle2" sx={{ fontSize: '1.1rem', color: '#ddd', fontFamily: 'Montserrat' }}>
              {advisor.title}
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </Grid>
  ));

  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      padding: '2rem',
      overflowY: 'auto',
      backgroundAttachment: 'fixed'
    }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom sx={{ margin: '2rem 0', fontWeight: 'bold', color: '#fff', fontFamily: 'Poppins' }}>
          Advisory Board
        </Typography>

        <Typography variant="h4" align="center" sx={{ margin: '1rem 0', fontWeight: 'bold', color: '#fff', fontFamily: 'Montserrat' }}>
          Main Chair Persons
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {renderAdvisors(mainChairPersons)}
        </Grid>

        <Typography variant="h4" align="center" sx={{ margin: '2rem 0', fontWeight: 'bold', color: '#fff', fontFamily: 'Montserrat' }}>
          National Board
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {renderAdvisors(nationalBoard)}
        </Grid>

        <Typography variant="h4" align="center" sx={{ margin: '2rem 0', fontWeight: 'bold', color: '#fff', fontFamily: 'Montserrat' }}>
          Local Advisors
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {renderAdvisors(localAdvisors)}
        </Grid>
      </Container>
    </div>
  );
};  

export default AdvisoryBoard;
