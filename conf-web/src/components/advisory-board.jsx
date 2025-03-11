import React from 'react';

import { Container, Box, Typography, Grid2 } from '@mui/material';

import { motion } from 'framer-motion';

const advisoryBoard = [
  { name: 'Er. Ganesh Kajale', title: 'Senior Software Developer, State Farm, Bloomington, Illinois, USA' },
  { name: 'Dr. Jagdish Chand Bansal', title: 'Professor, Dept. of Mathematics & CSE, South Asian University, (An International University established by SAARC Nations), New Delhi' },
  { name: 'Dr. U.V. Bhosle', title: 'Vice Chancellor, SRT Marathwada University' },
  { name: 'Dr. A.K. Tiwari', title: 'Professor, IIT Jodhpur' },
  { name: 'Prof. S.S. Pathak', title: 'Electronics and Electrical Engineering, IIT Kharagpur' },
  { name: 'Dr. Kishore P. Sarawadekar', title: 'Dept. of Electronics Engineering, IIT Varanasi' },
  { name: 'Dr. S.R. Sathe', title: 'Professor, Dept. of CSE, VNIT, Nagpur' },
  { name: 'Dr. S.A. Lohi, Professor', title: 'Assistant Professor (Senior Grade) Dept. of IT, Government College of Engineering, Amravati' },
{ name:	'Dr. R.M. Metkar, Professor', title:'Associate Professor & Dean Research & Innovations, Government College of Engineering, Amravati' },
{ name: 'Dr. R.N. Jogekar, Professor', title:'Associate Professor, CSE, JIT, Nagpur & Member, BoS, CSE, RTMNU '},
{ name: 'Dr. S.S. Thakare , Professor', title:'Assistant Professor (Senior Grade), Dept. of Electronics & Tele. Engineering, Government College of Engineering, Amravati '},
{ name: 'Prof. D.B. Maheshwari , Professor', title:'Assistant Professor, Dept. of Electronics Engineering& Tele., Government College of Engineering, Amravati '},
{ name: 'Dr. Amol P. Bhopale , Professor', title:'Assistant Professor, CSE, IIIT, Nagpur '},
{ name: 'Dr. Vasundhara Rathod , Professor', title:'Assistant Professor, CSE, IIIT, Nagpur '},
{ name: 'Er. Mayank Rai', title:'General Motors, USA '},
{ name: 'Er. Saju Paul', title:'Sr. Technical Specialist, Persistent System Limited, IT Park, Nagpur '},
{ name: 'Er. Rahul Ghodeswar', title:'Solution Architect and Consultant, TCS, MIHAN, Nagpur '},
{ name: 'Er. Sameer Sharma', title:'Data Scientist, Cognizant Technology Solutions, US Corp, WI, USA '},
{ name: 'Mr. Sagar Udasi', title:'Senior Quality Assurance Test Developer, Nvidia Graphics Pvt. Ltd, Pune '},
{ name: 'Er. Rupal Shirpurkar', title:'Business Head (Cloud BU-APAC) Click2Cloud Inc '},
{ name: 'Dr. M.M. Raghuwanshi', title:'Dean, Engineering & Technology, SBJIET '},
{ name: 'Dr. Manoj Chandak', title:'Professor & Head, Dept. of CSE, RCOEM, Nagpur '},
{ name: 'Dr. K. K. Bhoyar ', title:'Professor, Dept. of IT, YCCE, Nagpur '},
{ name: 'Dr. P. V. Ingole ', title:'Chairman, IETE Amravati Chapter, Amravati '},
{ name: 'Dr. S.M. Gulhane ', title:'Principal, PREC, Loni '},
{ name: 'Dr. S.R. Satone  ', title:'Head, Deptt. Of Civil Engineering '},
{ name: 'Dr. S. S. Ambekar ', title:'Head, Deptt. Of Electrical Engineering '},
{ name: 'Dr. P. D. Khandait ', title:'Head Deptt. Of Electronics & Telecommunication '},
{ name: 'Dr. S.P. Khandait ', title:'Head Deptt. Of Information Technology '},
{ name: 'Dr. S. Ikhar ', title:'Head, Deptt. Of Mechanical Engineering '},
{ name: 'Dr. G.H. Agrawal', title:'Incharge, Dept. of Basic science & Humanities '},
{ name: 'Prof. Budhe ', title:'Head, Deptt. Of Business Administration '},

    
];

const organisingBoard = [
  { name: 'Prof. S. S. Ganorkar ', title:'Asst. Professor, Department of Information Technology, KDKCE '},
  { name: 'Dr. R. Burange ', title:'Asst Prof. Department of Electronics & Tele-Comm. Engineering, KDKCE'},
   { name: 'Dr. H.V. Gorewar ', title:' Asst. Professor, Department of Information Technology, KDKCE '},
   { name: 'Prof. Y. D. Choudhari ', title:'Asst. Professor, Department of Information Technology, KDKCE '},
   { name: 'Dr. J. Gawai ', title:'Asst Prof. Department of Electronics & Tele-Comm. Engineering, KDKCE '},
   { name: 'Er. R.B. Khule ', title:'Asst.Prof. Department of Electronics & Tele-Comm. Engineering, KDKCE '},
   { name: 'Er. V.M. Mahawadiwar ', title:'Department of Electronics & Tele-Comm. Engineering, KDKCE '},
   { name: 'Er. S.A. Bagal ', title:'Asst.Prof., Department of Electronics & Tele-Comm. Engineering, KDKCE '},
   { name: 'Dr. P.M.Shende ', title:'Asst Prof. Department of Electronics & Tele-Comm.Engineering,KDKCE '},
   { name: 'Prof. R. Kolte ', title:'Asst. Prof. Department of Information Technology, KDKCE '},
   { name: 'Prof. P. A. Gharad ', title:'Asst. Professor, Department of Computer Science & Engg. KDKCE '},
   { name: 'Er. Sachin Verma ', title:'Asst. Professor, Department of Computer Science & Engg. KDKCE '},
   { name: 'Er. S.S. Chahande ', title:'Asst. Professor, Department of Computer Science & Engg. KDKCE '},
   { name: 'Er. D.W. Wanjari ', title:'Asst. Professor, Department of Computer Science & Engg. KDKCE '},
   { name: 'Er. S A Satone ', title:'Asst. Professor, Department of Computer Science & Engg. KDKCE '},
   { name: 'Er. T.H. Mankar ', title:'Asst. Professor, Department of Computer Science & Engg. KDKCE '},
   { name: 'Er. N. C. Nayak ', title:'Asst. Professor, Department of Computer Science & Engg. KDKCE '},
   { name: 'Er. M.R. Chaudhari', title:'Asst. Professor, Department of Computer Science & Engg. KDKCE '},
   { name: 'Er. P.C. Patil ', title:'Asst. Professor, Department of Computer Science & Engg. KDKCE '},
   { name: 'Er. P. S. Nagmote ', title:'Asst. Professor, Department of Computer Science & Engg. KDKCE '},


];

const AdvisoryBoard = () => {
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
    marginBottom: '1.5rem',
    fontFamily: 'Montserrat',
    textAlign: 'center',
  };

  const boardContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(275px, 1fr))',
    gap: '2rem',
    width: '100%',
    maxWidth: '1400px',
  };

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.15',
    borderRadius: '20px',
    padding: '1.5rem',
    boxShadow: '0px 10px 30px rgba(0,0,0,0.2)',
    cursor: 'pointer',
    fontFamily: 'Montserrat',
    textAlign: 'center',
    transition: 'transform 0.1s ease-in-out',
    minHeight: '450px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    wordBreak: 'break-word',
  };

  const nameStyle = {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
    color: '#fff',
  };

  const designationStyle = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#333',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Advisory Board</h1>
      <div style={boardContainerStyle}>
        {advisoryBoard.map((member, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            style={cardStyle}
          >
            <h2 style={nameStyle}>{member.name}</h2>
            <p style={designationStyle}>{member.title}</p>
          </motion.div>
        ))}
      </div>
      <h1 style={{ ...titleStyle, marginTop: '3rem' }}>Organising Board</h1>
      <div style={boardContainerStyle}>
        {organisingBoard.map((member, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            style={cardStyle}
          >
            <h2 style={nameStyle}>{member.name}</h2>
            <p style={designationStyle}>{member.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdvisoryBoard;

