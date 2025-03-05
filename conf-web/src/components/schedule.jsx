import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const day1Schedule = [
  { time: '09:00 AM', event: 'Opening Ceremony', speaker: 'Dr. John Doe' },
  { time: '10:00 AM', event: 'Keynote Speech', speaker: 'Dr. Jane Smith' },
  { time: '11:00 AM', event: 'AI & Machine Learning', speaker: 'Dr. Alan Turing' },
  { time: '12:00 PM', event: 'Networking Break', speaker: '' },
  { time: '01:00 PM', event: 'Cybersecurity Panel', speaker: 'Dr. Grace Hopper' }
];

const day2Schedule = [
  { time: '09:00 AM', event: 'Data Science Workshop', speaker: 'Dr. Ada Lovelace' },
  { time: '10:00 AM', event: 'Blockchain Innovations', speaker: 'Dr. Satoshi Nakamoto' },
  { time: '11:00 AM', event: 'Cloud Computing', speaker: 'Dr. Linus Torvalds' },
  { time: '12:00 PM', event: 'Networking Break', speaker: '' },
  { time: '01:00 PM', event: 'Closing Remarks', speaker: 'Dr. Claude Shannon' }
];

const renderSchedule = (schedule) => schedule.map((item, index) => (
  <motion.div
    key={index}
    whileHover={{ scale: 1.02 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.1, ease: 'easeOut' }}
  >
    <Box sx={{
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '15px',
      padding: '1.5rem',
      marginBottom: '1rem',
      boxShadow: '0px 10px 25px rgba(0,0,0,0.3)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', fontFamily: 'Montserrat', flex: '1 1 30%' }}>
        {item.time}
      </Typography>
      <Typography variant="h6" sx={{ fontFamily: 'Poppins', flex: '1 1 40%' }}>
        {item.event}
      </Typography>
      <Typography variant="subtitle1" sx={{ fontStyle: 'italic', fontFamily: 'Montserrat', flex: '1 1 30%' }}>
        {item.speaker}
      </Typography>
    </Box>
  </motion.div>
));

const ProgramSchedule = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      padding: '2rem',
      color: '#fff',
      backgroundAttachment: 'fixed'
    }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom sx={{ margin: '2rem 0', fontWeight: 'bold', fontFamily: 'Poppins' }}>
          Program Schedule
        </Typography>

        <Typography variant="h4" align="center" gutterBottom sx={{ margin: '2rem 0', fontWeight: 'bold', fontFamily: 'Montserrat' }}>
          Day 1
        </Typography>
        {renderSchedule(day1Schedule)}

        <Typography variant="h4" align="center" gutterBottom sx={{ margin: '2rem 0', fontWeight: 'bold', fontFamily: 'Montserrat' }}>
          Day 2
        </Typography>
        {renderSchedule(day2Schedule)}
      </Container>
    </div>
  );
};

export default ProgramSchedule;
