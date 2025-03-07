import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';
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

const organizingBoard = [
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
        alignItems: 'flex-start',
        flexDirection: 'column'
      }}
    >
      <Container maxWidth="1.5g">
        <Typography variant="h2" align="center" gutterBottom sx={{
          marginBottom: '3rem',
          fontWeight: '500',
          fontFamily: 'Poppins',
          letterSpacing: '3px',
          textShadow: '3px 3px 8px rgba(0,0,0,0.6)',
          textTransform: 'uppercase'
        }}>
          Advisory Board
        </Typography>
        <Grid container spacing={3} justifyContent="center">
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
                  borderRadius: '15px',
                  padding: '1rem',
                  textAlign: 'center',
                  boxShadow: '0px 15px 25px rgba(0,0,0,0.4)',
                  border: '2px solid rgba(255, 255, 255, 0.5)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out',
                  marginBottom: '1.5rem',
                  height: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <Typography variant="h5" sx={{
                    fontWeight: '500',
                    fontFamily: 'Montserrat',
                    marginBottom: '0.5rem',
                    color: '#fff',
                    letterSpacing: '1px'
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
            </Grid>
          ))}
        </Grid>

        <Typography variant="h2" align="center" gutterBottom sx={{
          marginTop: '4rem',
          marginBottom: '3rem',
          fontWeight: '900',
          fontFamily: 'Poppins',
          letterSpacing: '3px',
          textShadow: '3px 3px 8px rgba(0,0,0,0.6)',
          textTransform: 'uppercase'
        }}>
          Organizing Board
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {organizingBoard.map((person, index) => (
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
                    fontWeight: '500',
                    fontFamily: 'Montserrat',
                    marginBottom: '0.5rem',
                    color: '#fff',
                    letterSpacing: '1px'
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
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
};

export default AdvisoryBoard;
