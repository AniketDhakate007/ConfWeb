import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const callForPapers = [
  {
    title: 'Artificial Intelligence',
    description: 'Explore cutting-edge AI technologies, including machine learning, neural networks, and natural language processing. Submit your research today!Explore cutting-edge AI technologies, including machine learning, neural networks, and natural language processing.',
    deadline: 'Submission Deadline: March 30, 2025'
  },
  {
    title: 'Cybersecurity',
    description: 'Submit papers on data protection, cryptography, and strategies for securing digital assets.',
    deadline: 'Submission Deadline: March 30, 2025'
  },
  {
    title: 'Cloud Computing',
    description: 'Contribute to discussions on cloud architecture, distributed computing, and serverless technologies.',
    deadline: 'Submission Deadline: March 30, 2025'
  },
  {
    title: 'Data Science',
    description: 'Share insights on big data analytics, data mining techniques, and AI-driven data models.',
    deadline: 'Submission Deadline: March 30, 2025'
  }
];

const CallForPapers = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      padding: '3rem 2rem',
      color: '#fff',
      backgroundAttachment: 'fixed'
    }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Typography variant="h2" align="center" gutterBottom sx={{
            margin: '2rem 0',
            fontWeight: 'bold',
            fontFamily: 'Poppins',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            letterSpacing: '2px'
          }}>
            Call for Papers
          </Typography>
        </motion.div>

        {callForPapers.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: 1 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
          >
            <Box sx={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: '25px',
              padding: '2.5rem',
              marginBottom: '2rem',
              boxShadow: '0px 20px 40px rgba(0,0,0,0.4)',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease-in-out',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              transformOrigin: 'center'
            }}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', fontFamily: 'Montserrat', marginBottom: '1rem' }}>
                {item.title}
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: 'Poppins', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                {item.description}
              </Typography>
              <Typography variant="subtitle1" sx={{ fontStyle: 'italic', fontFamily: 'Montserrat', color: '#f1f1f1' }}>
                {item.deadline}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Container>
    </div>
  );
};

export default CallForPapers;
