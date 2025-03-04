import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Ghost from '../assets/G.jpeg';
import Price from '../assets/P.jpeg';
import Soap from '../assets/S.jpeg'

const advisors = [
  {
    name: 'Ghost',
    title: 'Lt. General',
    image: Ghost
  },
  {
    name: 'John Price',
    title: 'Captain',
    image: Price
  },
  {
    name: 'Johny Soap',
    title: 'Sergeant',
    image: Soap
  }
];

const AdvisoryBoard = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem'
    }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom sx={{ margin: '2rem 0', fontWeight: 'bold', color: '#fff' }}>
          Advisory Board
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {advisors.map((advisor, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Box sx={{
                  backgroundColor: '#fff',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0px 10px 25px rgba(0,0,0,0.2)',
                  textAlign: 'center',
                  maxWidth: '280px',
                  margin: '0 auto'
                }}>
                  <img src={advisor.image} alt={advisor.name} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                  <Box sx={{ padding: '1rem' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {advisor.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {advisor.title}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default AdvisoryBoard;
