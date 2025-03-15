import React from 'react';
import { motion } from 'framer-motion';

const importantDates = [
  { event: 'Full Length Paper Submission', date: '5th March 2025' },
  { event: 'Intimation of Paper Acceptance', date: '11th March 2025' },
  { event: 'Camera Ready Paper Submission', date: '17th March 2025' },
  { event: 'Registration Deadline', date: '1st April 2025' }
];

const ImportantDates = () => {
  return (
    <div style={styles.container}>
      <motion.h2 style={styles.title} whileHover={{ scale: 1.05 }}>Important Dates</motion.h2>
      <div style={styles.datesContainer}>
        {importantDates.map((item, index) => (
          <motion.div
            key={index}
            style={styles.dateCard}
            whileHover={{ scale: 1.03 }}
          >
            <p style={styles.event}>{item.event} :</p>
            <p style={styles.date}>{item.date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: 'linear-gradient(135deg, #32a852, #4285f4)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '4rem 2rem',
  },
  title: {
    color: '#fff',
    fontSize: '2.5rem',
    background: '#000',
    padding: '10px 20px',
    borderRadius: '10px',
    fontFamily: 'Montserrat, sans-serif',
    textAlign: 'center',
  },
  datesContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2rem',
    width: '100%',
    maxWidth: '600px',
  },
  dateCard: {
    background: 'rgba(255, 255, 255, 0.15)',
    padding: '1rem 2rem',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
    margin: '15px 0',
    width: '100%',
    textAlign: 'center',
  },
  event: {
    fontSize: '1.25rem',
    color: '#fff',
    fontWeight: '500',
    fontstyle: 'mosserrat',
  },
  date: {
    fontSize: '1.75rem',
    fontWeight: '600',
    color: '#000',
    fontstyle: 'mosserrat',
  },
};

export default ImportantDates;
