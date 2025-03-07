import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Call For Papers', path: '/call_for_papers' },
    { name: 'Important Dates', path: '/about' },
    { name: 'Paper Format', path: '/' },
    { name: 'Paper Submission', path: '/' }
  ];

  return (
    <Box sx={{ position: 'relative', display: 'inline-block' }}>
      <motion.button 
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        style={{
          background: 'linear-gradient(135deg, #32a852, #4285f4)',
          color: '#fff',
          padding: '0.8rem 1.5rem',
          borderRadius: '25px',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontFamily: 'Montserrat',
        }}
      >
        For Authors
      </motion.button>
      {isOpen && (
        <motion.ul 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            borderRadius: '15px',
            padding: '1rem',
            listStyle: 'none',
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '200px',
            boxShadow: '0px 10px 30px rgba(0,0,0,0.3)',
            zIndex: 1000,
          }}
        >
          {links.map((link, index) => (
            <motion.li 
              key={index} 
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(50, 168, 82, 0.8)' }}
              style={{
                padding: '0.8rem',
                borderRadius: '10px',
                marginBottom: '0.5rem',
                cursor: 'pointer',
              }}
            >
              <Link to={link.path} style={{
                textDecoration: 'none',
                color: '#fff',
                fontWeight: '600',
                fontFamily: 'Montserrat',
              }}>
                {link.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </Box>
  );
};

export default Dropdown;
