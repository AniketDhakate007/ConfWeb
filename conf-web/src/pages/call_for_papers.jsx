// // import React from "react";
// // import { motion } from "framer-motion";

// // const topics = [
// //   {
// //     name: "Analog and Digital devices and Services",
// //     description:
// //       "Explore the latest advancements in analog and digital devices and services.",
// //   },
// //   {
// //     name: "Data Structures and Algorithms",
// //     description:
// //       "Discuss the future of data structures and algorithms and their impact on various industries.",
// //   },
// //   {
// //     name: "Applied Statistics and Data Science",
// //     description:
// //       "Delve into the world of applied statistics and data science and their potential to revolutionize industries.",
// //   },
// //   {
// //     name: "Digital Communication and Security",
// //     description:
// //       "Explore the latest advancements in digital communication and security.",
// //   },
// //   {
// //     name: "Artificial Intelligence, Deep Learning and Machine Learning",
// //     description:
// //       "Discuss the future of AI, deep learning, and machine learning and their impact on various industries.",
// //   },
// //   {
// //     name: "Digital Electronics",
// //     description: "Explore the latest advancements in digital electronics.",
// //   },
// //   {
// //     name: "Autonomous Systems and Robotics",
// //     description:
// //       "Delve into the world of autonomous systems and robotics and their potential to revolutionize industries.",
// //   },
// //   {
// //     name: "Digital Signal Processing",
// //     description:
// //       "Explore the latest advancements in digital signal processing.",
// //   },
// //   {
// //     name: "Big Data and Analytics",
// //     description:
// //       "Discuss the future of big data and analytics and their impact on various industries.",
// //   },
// //   {
// //     name: "Expert and AI-enabled Systems",
// //     description:
// //       "Explore the latest advancements in expert and AI-enabled systems.",
// //   },
// //   {
// //     name: "Bioinformatics and Scientific Computing",
// //     description:
// //       "Delve into the world of bioinformatics and scientific computing and their potential to revolutionize industries.",
// //   },
// //   {
// //     name: "Field Theory",
// //     description: "Explore the latest advancements in field theory.",
// //   },
// //   {
// //     name: "Bio-inspired Composite Materials",
// //     description:
// //       "Discuss the future of bio-inspired composite materials and their impact on various industries.",
// //   },
// //   {
// //     name: "High Performance Computing",
// //     description:
// //       "Explore the latest advancements in high performance computing.",
// //   },
// //   {
// //     name: "Biomechanics and Rehabilitation Engineering",
// //     description:
// //       "Delve into the world of biomechanics and rehabilitation engineering and their potential to revolutionize industries.",
// //   },
// //   {
// //     name: "High Voltage Engineering and Insulation Technology",
// //     description:
// //       "Explore the latest advancements in high voltage engineering and insulation technology.",
// //   },
// //   {
// //     name: "Cloud Computing and Virtualization",
// //     description:
// //       "Discuss the future of cloud computing and virtualization and their impact on various industries.",
// //   },
// //   {
// //     name: "Human-Robot Interaction",
// //     description: "Explore the latest advancements in human-robot interaction.",
// //   },
// //   {
// //     name: "Communication Systems",
// //     description:
// //       "Delve into the world of communication systems and their potential to revolutionize industries.",
// //   },
// //   {
// //     name: "Image and Video Processing, Computer Vision and Robotics",
// //     description:
// //       "Explore the latest advancements in image and video processing, computer vision, and robotics.",
// //   },
// //   {
// //     name: "Compilers and Natural Language Processing",
// //     description:
// //       "Discuss the future of compilers and natural language processing and their impact on various industries.",
// //   },
// //   {
// //     name: "Industrial Automation and Control",
// //     description:
// //       "Explore the latest advancements in industrial automation and control.",
// //   },
// //   {
// //     name: "Computational Intelligence in Various Domains",
// //     description:
// //       "Delve into the world of computational intelligence and its applications in various domains.",
// //   },
// //   {
// //     name: "Information Systems and Retrieval",
// //     description:
// //       "Explore the latest advancements in information systems and retrieval.",
// //   },
// //   {
// //     name: "Computational Mathematics",
// //     description:
// //       "Discuss the future of computational mathematics and its impact on various industries.",
// //   },
// //   {
// //     name: "Information Technology Application",
// //     description:
// //       "Explore the latest advancements in information technology applications.",
// //   },
// //   {
// //     name: "Computational Physics and Simulation",
// //     description:
// //       "Delve into the world of computational physics and simulation and their potential to revolutionize industries.",
// //   },
// //   {
// //     name: "Intelligent Systems and Approach",
// //     description:
// //       "Explore the latest advancements in intelligent systems and approaches.",
// //   },
// //   {
// //     name: "Computer Architecture and Embedded Systems",
// //     description:
// //       "Discuss the future of computer architecture and embedded systems and their impact on various industries.",
// //   },
// //   {
// //     name: "Internet of Things (IoT)",
// //     description:
// //       "Explore the latest advancements in the Internet of Things (IoT).",
// //   },
// //   {
// //     name: "Computer Games and Animation",
// //     description:
// //       "Delve into the world of computer games and animation and their potential to revolutionize industries.",
// //   },
// //   {
// //     name: "Knowledge Management",
// //     description: "Explore the latest advancements in knowledge management.",
// //   },
// //   {
// //     name: "Computer Graphics, Modeling & Virtual Reality",
// //     description:
// //       "Discuss the future of computer graphics, modeling, and virtual reality and their impact on various industries.",
// //   },
// //   {
// //     name: "Mathematical Modelling and Optimization",
// //     description:
// //       "Explore the latest advancements in mathematical modeling and optimization.",
// //   },
// //   {
// //     name: "Computer Networks, Security, Cryptography & Distributed Computing",
// //     description:
// //       "Delve into the world of computer networks, security, cryptography, and distributed computing and their potential to revolutionize industries.",
// //   },
// //   {
// //     name: "Mechatronics",
// //     description: "Explore the latest advancements in mechatronics.",
// //   },
// //   {
// //     name: "Computer-aided Design and Manufacturing",
// //     description:
// //       "Discuss the future of computer-aided design and manufacturing and their impact on various industries.",
// //   },
// //   {
// //     name: "Medical Imaging and Diagnostics",
// //     description:
// //       "Explore the latest advancements in medical imaging and diagnostics.",
// //   },
// //   {
// //     name: "Computing and Control in Additive Manufacturing and 3D Printing",
// //     description:
// //       "Delve into the world of computing and control in additive manufacturing and 3D printing and their potential to revolutionize industries.",
// //   },
// //   {
// //     name: "Microprocessor based Technologies",
// //     description:
// //       "Explore the latest advancements in microprocessor-based technologies.",
// //   },
// //   {
// //     name: "Computing and Control in Ergonomics and Human Factors",
// //     description:
// //       "Discuss the future of computing and control in ergonomics and human factors and their impact on various industries.",
// //   },
// //   {
// //     name: "Mobile Computing and Multimedia Applications",
// //     description:
// //       "Explore the latest advancements in mobile computing and multimedia applications.",
// //   },
// //   {
// //     name: "Computing and Control in Fluid Mechanics and Heat Transfer",
// //     description:
// //       "Delve into the world of computing and control in fluid mechanics and heat transfer and their potential to revolutionize industries.",
// //   },
// //   {
// //     name: "Operation Research and Optimization",
// //     description:
// //       "Explore the latest advancements in operation research and optimization.",
// //   },
// //   {
// //     name: "Computing and Control in Project Management and Industrial Innovation",
// //     description:
// //       "Discuss the future of computing and control in project management and industrial innovation and their impact on various industries.",
// //   },
// //   {
// //     name: "Parallel and Distributed Computing",
// //     description:
// //       "Explore the latest advancements in parallel and distributed computing.",
// //   },
// //   {
// //     name: "Computing and Control in Quality Control and Process Improvement",
// //     description:
// //       "Delve into the world of computing and control in quality control and process improvement and their potential to revolutionize industries.",
// //   },
// //   {
// //     name: "Power System Planning and Scheduling",
// //     description:
// //       "Explore the latest advancements in power system planning and scheduling.",
// //   },
// //   {
// //     name: "Computing and Control in Supply Chain Management",
// //     description:
// //       "Discuss the future of computing and control in supply chain management and their impact on various industries.",
// //   },
// //   {
// //     name: "Power System Protection, Operation and Control",
// //     description:
// //       "Explore the latest advancements in power system protection, operation, and control.",
// //   },
// //   {
// //     name: "Computing and Control in Thermodynamics and Energy Systems",
// //     description:
// //       "Delve into the world of computing and control in thermodynamics and energy systems and their potential to revolutionize industries.",
// //   },
// //   {
// //     name: "Quantum Mechanics and Quantum Computing",
// //     description:
// //       "Explore the latest advancements in quantum mechanics and quantum computing.",
// //   },
// //   {
// //     name: "Computing in Geotechnical and Earthquake Engineering",
// //     description:
// //       "Discuss the future of computing in geotechnical and earthquake engineering and its impact on various industries.",
// //   },
// //   {
// //     name: "Semiconductor Technology",
// //     description: "Explore the latest advancements in semiconductor technology.",
// //   },
// //   {
// //     name: "Computing in Structural Engineering and Mechanics",
// //     description:
// //       "Delve into the world of computing in structural engineering and mechanics and their potential to revolutionize industries.",
// //   },
// //   {
// //     name: "Smart Cities and Urban Development",
// //     description:
// //       "Explore the latest advancements in smart cities and urban development.",
// //   },
// //   {
// //     name: "Computing in Transportation Engineering and Traffic Management",
// //     description:
// //       "Discuss the future of computing in transportation engineering and traffic management and its impact on various industries.",
// //   },
// //   {
// //     name: "Software Architecture and Engineering",
// //     description:
// //       "Explore the latest advancements in software architecture and engineering.",
// //   },
// //   {
// //     name: "Computing Practices & Applications in Various Domains",
// //     description:
// //       "Delve into the world of computing practices and applications in various domains and their potential to revolutionize industries.",
// //   },
// //   {
// //     name: "Telecommunication Technologies",
// //     description:
// //       "Explore the latest advancements in telecommunication technologies.",
// //   },
// //   {
// //     name: "Control Theory and Application",
// //     description:
// //       "Discuss the future of control theory and its applications and their impact on various industries.",
// //   },
// //   {
// //     name: "Telemedicine and Health Informatics",
// //     description:
// //       "Explore the latest advancements in telemedicine and health informatics.",
// //   },
// //   {
// //     name: "Cybersecurity and Blockchain Technology",
// //     description:
// //       "Delve into the world of cybersecurity and blockchain technology and their potential to revolutionize industries.",
// //   },
// //   {
// //     name: "VLSI Technology",
// //     description: "Explore the latest advancements in VLSI technology.",
// //   },
// //   {
// //     name: "Data Communications, Compression and Encryption",
// //     description:
// //       "Discuss the future of data communications, compression, and encryption and their impact on various industries.",
// //   },
// //   {
// //     name: "Wearable Health Monitoring Systems",
// //     description:
// //       "Explore the latest advancements in wearable health monitoring systems.",
// //   },
// // ];

// // const CallForPapers = () => {
// //   return (
// //     <div
// //       className="min-h-screen p-6 flex flex-col items-center"
// //       style={{ background: "linear-gradient(135deg, #32a852, #4285f4)" }}
// //     >
// //       <h1 className="text-white text-center text-4xl font-bold mb-8">
// //         Call for Papers
// //       </h1>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl w-full">
// //         {topics.map((topic, index) => (
// //           <motion.div
// //             key={index}
// //             className="flex flex-col items-center gap-4 p-6 rounded-lg shadow-lg backdrop-blur-md bg-opacity-30 border border-white"
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: index * 0.2 }}
// //             style={{
// //               background: "rgba(255, 255, 255, 0.1)",
// //               boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
// //             }}
// //           >
// //             <h2 className="text-2xl font-semibold text-white">{topic.name}</h2>
// //             <p className="text-gray-200 text-lg text-center">
// //               {topic.description}
// //             </p>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CallForPapers;

// // // import React from "react";
// // // import { motion } from "framer-motion";
// // // import "./call_for_papers.css";

// // // const topics = [
// // //   {
// // //     name: "Analog and Digital devices and Services",
// // //     description:
// // //       "Explore the latest advancements in quantum computing and its applications.",
// // //   },
// // //   {
// // //     name: "Data Structures and Algorithms",
// // //     description:
// // //       "Discuss the future of AI and its impact on various industries.",
// // //   },
// // //   {
// // //     name: "Applied Statistics and Data Science",
// // //     description:
// // //       "Delve into the world of blockchain and its potential to revolutionize industries.",
// // //   },
// // //   {
// // //     name: "Digital Communication and Security",
// // //     description:
// // //       "Delve into the world of blockchain and its potential to revolutionize industries.",
// // //   },
// // //   {
// // //     name: "Artificial Intelligence, Deep Learning and Machine Learning",
// // //     description:
// // //       "Delve into the world of blockchain and its potential to revolutionize industries.",
// // //   },
// // //   {
// // //     name: "Digital Electronics",
// // //     description:
// // //       "Delve into the world of blockchain and its potential to revolutionize industries.",
// // //   },
// // //   {
// // //     name: "Digital Signal Processing",
// // //     description:
// // //       "Delve into the world of blockchain and its potential to revolutionize industries.",
// // //   },
// // //   {
// // //     name: "Applied Statistics and Data Science",
// // //     description:
// // //       "Delve into the world of blockchain and its potential to revolutionize industries.",
// // //   },
// // //   {
// // //     name: "Applied Statistics and Data Science",
// // //     description:
// // //       "Delve into the world of blockchain and its potential to revolutionize industries.",
// // //   },
// // //   {
// // //     name: "Applied Statistics and Data Science",
// // //     description:
// // //       "Delve into the world of blockchain and its potential to revolutionize industries.",
// // //   },
// // //   {
// // //     name: "Applied Statistics and Data Science",
// // //     description:
// // //       "Delve into the world of blockchain and its potential to revolutionize industries.",
// // //   },
// // //   {
// // //     name: "Applied Statistics and Data Science",
// // //     description:
// // //       "Delve into the world of blockchain and its potential to revolutionize industries.",
// // //   },
// // //   {
// // //     name: "Applied Statistics and Data Science",
// // //     description:
// // //       "Delve into the world of blockchain and its potential to revolutionize industries.",
// // //   },
// // //   {
// // //     name: "Applied Statistics and Data Science",
// // //     description:
// // //       "Delve into the world of blockchain and its potential to revolutionize industries.",
// // //   },
// // //   {
// // //     name: "Applied Statistics and Data Science",
// // //     description:
// // //       "Delve into the world of blockchain and its potential to revolutionize industries.",
// // //   },
// // //   {
// // //     name: "Applied Statistics and Data Science",
// // //     description:
// // //       "Delve into the world of blockchain and its potential to revolutionize industries.",
// // //   },
// // //   {
// // //     name: "Applied Statistics and Data Science",
// // //     description:
// // //       "Delve into the world of blockchain and its potential to revolutionize industries.",
// // //   },
// // //   {
// // //     name: "Applied Statistics and Data Science",
// // //     description:
// // //       "Delve into the world of blockchain and its potential to revolutionize industries.",
// // //   },
// // //   {
// // //     name: "Applied Statistics and Data Science",
// // //     description:
// // //       "Delve into the world of blockchain and its potential to revolutionize industries.",
// // //   },
// // //   {
// // //     name: "Applied Statistics and Data Science",
// // //     description:
// // //       "Delve into the world of blockchain and its potential to revolutionize industries.",
// // //   },
// // //   {
// // //     name: "Applied Statistics and Data Science",
// // //     description:
// // //       "Delve into the world of blockchain and its potential to revolutionize industries.",
// // //   },
// // //   {
// // //     name: "Applied Statistics and Data Science",
// // //     description:
// // //       "Delve into the world of blockchain and its potential to revolutionize industries.",
// // //   },
// // //   {
// // //     name: "Applied Statistics and Data Science",
// // //     description:
// // //       "Delve into the world of blockchain and its potential to revolutionize industries.",
// // //   },
// // //   {
// // //     name: "Applied Statistics and Data Science",
// // //     description:
// // //       "Delve into the world of blockchain and its potential to revolutionize industries.",
// // //   },
// // //   {
// // //     name: "Applied Statistics and Data Science",
// // //     description:
// // //       "Delve into the world of blockchain and its potential to revolutionize industries.",
// // //   },
// // //   {
// // //     name: "Applied Statistics and Data Science",
// // //     description:
// // //       "Delve into the world of blockchain and its potential to revolutionize industries.",
// // //   },
// // //   {
// // //     name: "Applied Statistics and Data Science",
// // //     description:
// // //       "Delve into the world of blockchain and its potential to revolutionize industries.",
// // //   },
// // //   {
// // //     name: "Applied Statistics and Data Science",
// // //     description:
// // //       "Delve into the world of blockchain and its potential to revolutionize industries.",
// // //   },
// // //   // Add more topics as needed
// // // ];

// // // const CallForPapers = () => {
// // //   return (
// // //     <div
// // //       className="min-h-screen p-6 flex flex-col items-center"
// // //       style={{ background: "linear-gradient(135deg, #32a852, #4285f4)" }}
// // //     >
// // //       <h1 className="text-white text-center text-4xl font-bold mb-8">
// // //         Call for Papers
// // //       </h1>
// // //       <div className="max-w-4xl w-full flex flex-col items-center space-y-8">
// // //         {topics.map((topic, index) => (
// // //           <motion.div
// // //             key={index}
// // //             className="flex flex-col items-center gap-4 p-6 rounded-lg shadow-lg w-full max-w-lg backdrop-blur-md bg-opacity-30 border border-white"
// // //             initial={{ opacity: 0, y: 50 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.5, delay: index * 0.2 }}
// // //             style={{
// // //               background: "rgba(255, 255, 255, 0.1)",
// // //               boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
// // //             }}
// // //           >
// // //             <h2 className="text-2xl font-semibold text-white">{topic.name}</h2>
// // //             <p className="text-gray-200 text-lg">{topic.description}</p>
// // //           </motion.div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CallForPapers;

// import React from "react";
// import { motion } from "framer-motion";

// const topics = [
//   {
//     name: "Analog and Digital devices and Services",
//     description:
//       "Explore the latest advancements in analog and digital devices and services.",
//   },
//   {
//     name: "Data Structures and Algorithms",
//     description:
//       "Discuss the future of data structures and algorithms and their impact on various industries.",
//   },
//   {
//     name: "Applied Statistics and Data Science",
//     description:
//       "Delve into the world of applied statistics and data science and their potential to revolutionize industries.",
//   },
//   {
//     name: "Digital Communication and Security",
//     description:
//       "Explore the latest advancements in digital communication and security.",
//   },
//   {
//     name: "Artificial Intelligence, Deep Learning and Machine Learning",
//     description:
//       "Discuss the future of AI, deep learning, and machine learning and their impact on various industries.",
//   },
//   {
//     name: "Digital Electronics",
//     description: "Explore the latest advancements in digital electronics.",
//   },
//   {
//     name: "Autonomous Systems and Robotics",
//     description:
//       "Delve into the world of autonomous systems and robotics and their potential to revolutionize industries.",
//   },
//   {
//     name: "Digital Signal Processing",
//     description:
//       "Explore the latest advancements in digital signal processing.",
//   },
//   {
//     name: "Big Data and Analytics",
//     description:
//       "Discuss the future of big data and analytics and their impact on various industries.",
//   },
//   {
//     name: "Expert and AI-enabled Systems",
//     description:
//       "Explore the latest advancements in expert and AI-enabled systems.",
//   },
//   {
//     name: "Bioinformatics and Scientific Computing",
//     description:
//       "Delve into the world of bioinformatics and scientific computing and their potential to revolutionize industries.",
//   },
//   {
//     name: "Field Theory",
//     description: "Explore the latest advancements in field theory.",
//   },
//   {
//     name: "Bio-inspired Composite Materials",
//     description:
//       "Discuss the future of bio-inspired composite materials and their impact on various industries.",
//   },
//   {
//     name: "High Performance Computing",
//     description:
//       "Explore the latest advancements in high performance computing.",
//   },
//   {
//     name: "Biomechanics and Rehabilitation Engineering",
//     description:
//       "Delve into the world of biomechanics and rehabilitation engineering and their potential to revolutionize industries.",
//   },
//   {
//     name: "High Voltage Engineering and Insulation Technology",
//     description:
//       "Explore the latest advancements in high voltage engineering and insulation technology.",
//   },
//   {
//     name: "Cloud Computing and Virtualization",
//     description:
//       "Discuss the future of cloud computing and virtualization and their impact on various industries.",
//   },
//   {
//     name: "Human-Robot Interaction",
//     description: "Explore the latest advancements in human-robot interaction.",
//   },
//   {
//     name: "Communication Systems",
//     description:
//       "Delve into the world of communication systems and their potential to revolutionize industries.",
//   },
//   {
//     name: "Image and Video Processing, Computer Vision and Robotics",
//     description:
//       "Explore the latest advancements in image and video processing, computer vision, and robotics.",
//   },
//   {
//     name: "Compilers and Natural Language Processing",
//     description:
//       "Discuss the future of compilers and natural language processing and their impact on various industries.",
//   },
//   {
//     name: "Industrial Automation and Control",
//     description:
//       "Explore the latest advancements in industrial automation and control.",
//   },
//   {
//     name: "Computational Intelligence in Various Domains",
//     description:
//       "Delve into the world of computational intelligence and its applications in various domains.",
//   },
//   {
//     name: "Information Systems and Retrieval",
//     description:
//       "Explore the latest advancements in information systems and retrieval.",
//   },
//   {
//     name: "Computational Mathematics",
//     description:
//       "Discuss the future of computational mathematics and its impact on various industries.",
//   },
//   {
//     name: "Information Technology Application",
//     description:
//       "Explore the latest advancements in information technology applications.",
//   },
//   {
//     name: "Computational Physics and Simulation",
//     description:
//       "Delve into the world of computational physics and simulation and their potential to revolutionize industries.",
//   },
//   {
//     name: "Intelligent Systems and Approach",
//     description:
//       "Explore the latest advancements in intelligent systems and approaches.",
//   },
//   {
//     name: "Computer Architecture and Embedded Systems",
//     description:
//       "Discuss the future of computer architecture and embedded systems and their impact on various industries.",
//   },
//   {
//     name: "Internet of Things (IoT)",
//     description:
//       "Explore the latest advancements in the Internet of Things (IoT).",
//   },
//   {
//     name: "Computer Games and Animation",
//     description:
//       "Delve into the world of computer games and animation and their potential to revolutionize industries.",
//   },
//   {
//     name: "Knowledge Management",
//     description: "Explore the latest advancements in knowledge management.",
//   },
//   {
//     name: "Computer Graphics, Modeling & Virtual Reality",
//     description:
//       "Discuss the future of computer graphics, modeling, and virtual reality and their impact on various industries.",
//   },
//   {
//     name: "Mathematical Modelling and Optimization",
//     description:
//       "Explore the latest advancements in mathematical modeling and optimization.",
//   },
//   {
//     name: "Computer Networks, Security, Cryptography & Distributed Computing",
//     description:
//       "Delve into the world of computer networks, security, cryptography, and distributed computing and their potential to revolutionize industries.",
//   },
//   {
//     name: "Mechatronics",
//     description: "Explore the latest advancements in mechatronics.",
//   },
//   {
//     name: "Computer-aided Design and Manufacturing",
//     description:
//       "Discuss the future of computer-aided design and manufacturing and their impact on various industries.",
//   },
//   {
//     name: "Medical Imaging and Diagnostics",
//     description:
//       "Explore the latest advancements in medical imaging and diagnostics.",
//   },
//   {
//     name: "Computing and Control in Additive Manufacturing and 3D Printing",
//     description:
//       "Delve into the world of computing and control in additive manufacturing and 3D printing and their potential to revolutionize industries.",
//   },
//   {
//     name: "Microprocessor based Technologies",
//     description:
//       "Explore the latest advancements in microprocessor-based technologies.",
//   },
//   {
//     name: "Computing and Control in Ergonomics and Human Factors",
//     description:
//       "Discuss the future of computing and control in ergonomics and human factors and their impact on various industries.",
//   },
//   {
//     name: "Mobile Computing and Multimedia Applications",
//     description:
//       "Explore the latest advancements in mobile computing and multimedia applications.",
//   },
//   {
//     name: "Computing and Control in Fluid Mechanics and Heat Transfer",
//     description:
//       "Delve into the world of computing and control in fluid mechanics and heat transfer and their potential to revolutionize industries.",
//   },
//   {
//     name: "Operation Research and Optimization",
//     description:
//       "Explore the latest advancements in operation research and optimization.",
//   },
//   {
//     name: "Computing and Control in Project Management and Industrial Innovation",
//     description:
//       "Discuss the future of computing and control in project management and industrial innovation and their impact on various industries.",
//   },
//   {
//     name: "Parallel and Distributed Computing",
//     description:
//       "Explore the latest advancements in parallel and distributed computing.",
//   },
//   {
//     name: "Computing and Control in Quality Control and Process Improvement",
//     description:
//       "Delve into the world of computing and control in quality control and process improvement and their potential to revolutionize industries.",
//   },
//   {
//     name: "Power System Planning and Scheduling",
//     description:
//       "Explore the latest advancements in power system planning and scheduling.",
//   },
//   {
//     name: "Computing and Control in Supply Chain Management",
//     description:
//       "Discuss the future of computing and control in supply chain management and their impact on various industries.",
//   },
//   {
//     name: "Power System Protection, Operation and Control",
//     description:
//       "Explore the latest advancements in power system protection, operation, and control.",
//   },
//   {
//     name: "Computing and Control in Thermodynamics and Energy Systems",
//     description:
//       "Delve into the world of computing and control in thermodynamics and energy systems and their potential to revolutionize industries.",
//   },
//   {
//     name: "Quantum Mechanics and Quantum Computing",
//     description:
//       "Explore the latest advancements in quantum mechanics and quantum computing.",
//   },
//   {
//     name: "Computing in Geotechnical and Earthquake Engineering",
//     description:
//       "Discuss the future of computing in geotechnical and earthquake engineering and its impact on various industries.",
//   },
//   {
//     name: "Semiconductor Technology",
//     description: "Explore the latest advancements in semiconductor technology.",
//   },
//   {
//     name: "Computing in Structural Engineering and Mechanics",
//     description:
//       "Delve into the world of computing in structural engineering and mechanics and their potential to revolutionize industries.",
//   },
//   {
//     name: "Smart Cities and Urban Development",
//     description:
//       "Explore the latest advancements in smart cities and urban development.",
//   },
//   {
//     name: "Computing in Transportation Engineering and Traffic Management",
//     description:
//       "Discuss the future of computing in transportation engineering and traffic management and its impact on various industries.",
//   },
//   {
//     name: "Software Architecture and Engineering",
//     description:
//       "Explore the latest advancements in software architecture and engineering.",
//   },
//   {
//     name: "Computing Practices & Applications in Various Domains",
//     description:
//       "Delve into the world of computing practices and applications in various domains and their potential to revolutionize industries.",
//   },
//   {
//     name: "Telecommunication Technologies",
//     description:
//       "Explore the latest advancements in telecommunication technologies.",
//   },
//   {
//     name: "Control Theory and Application",
//     description:
//       "Discuss the future of control theory and its applications and their impact on various industries.",
//   },
//   {
//     name: "Telemedicine and Health Informatics",
//     description:
//       "Explore the latest advancements in telemedicine and health informatics.",
//   },
//   {
//     name: "Cybersecurity and Blockchain Technology",
//     description:
//       "Delve into the world of cybersecurity and blockchain technology and their potential to revolutionize industries.",
//   },
//   {
//     name: "VLSI Technology",
//     description: "Explore the latest advancements in VLSI technology.",
//   },
//   {
//     name: "Data Communications, Compression and Encryption",
//     description:
//       "Discuss the future of data communications, compression, and encryption and their impact on various industries.",
//   },
//   {
//     name: "Wearable Health Monitoring Systems",
//     description:
//       "Explore the latest advancements in wearable health monitoring systems.",
//   },
// ];

// const CallForPapers = () => {
//   return (
//     <div
//       className="min-h-screen p-6 flex flex-col items-center"
//       style={{ background: "linear-gradient(135deg, #32a852, #4285f4)" }}
//     >
//       <h1 className="text-white text-center text-4xl font-bold mb-8">
//         Call for Papers
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl w-full">
//         {topics.map((topic, index) => (
//           <motion.div
//             key={index}
//             className="flex flex-col items-center gap-4 p-6 rounded-lg shadow-lg backdrop-blur-md bg-opacity-0 border border-white transition-transform transform hover:scale-105"
//             // className="flex flex-col items-center gap-4 p-6 rounded-lg shadow-lg w-full max-w-lg backdrop-blur-md bg-opacity-30 border border-white"

//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//             style={{
//               background: "rgba(255, 255, 255, 0.6)",
//               boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <h2 className="text-2xl font-semibold text-white">{topic.name}</h2>
//             <p className="text-gray-200 text-lg text-justify">
//               {topic.description}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CallForPapers;

import React from "react";
import { motion } from "framer-motion";

const topics = [
  {
    name: "Analog and Digital devices and Services",
    description:
      "Explore the latest advancements in analog and digital devices and services.",
  },
  {
    name: "Data Structures and Algorithms",
    description:
      "Discuss the future of data structures and algorithms and their impact on various industries.",
  },
  {
    name: "Applied Statistics and Data Science",
    description:
      "Delve into the world of applied statistics and data science and their potential to revolutionize industries.",
  },
  {
    name: "Digital Communication and Security",
    description:
      "Explore the latest advancements in digital communication and security.",
  },
  {
    name: "Artificial Intelligence, Deep Learning and Machine Learning",
    description:
      "Discuss the future of AI, deep learning, and machine learning and their impact on various industries.",
  },
  {
    name: "Digital Electronics",
    description: "Explore the latest advancements in digital electronics.",
  },
  {
    name: "Autonomous Systems and Robotics",
    description:
      "Delve into the world of autonomous systems and robotics and their potential to revolutionize industries.",
  },
  {
    name: "Digital Signal Processing",
    description:
      "Explore the latest advancements in digital signal processing.",
  },
  {
    name: "Big Data and Analytics",
    description:
      "Discuss the future of big data and analytics and their impact on various industries.",
  },
  {
    name: "Expert and AI-enabled Systems",
    description:
      "Explore the latest advancements in expert and AI-enabled systems.",
  },
  {
    name: "Bioinformatics and Scientific Computing",
    description:
      "Delve into the world of bioinformatics and scientific computing and their potential to revolutionize industries.",
  },
  {
    name: "Field Theory",
    description: "Explore the latest advancements in field theory.",
  },
  {
    name: "Bio-inspired Composite Materials",
    description:
      "Discuss the future of bio-inspired composite materials and their impact on various industries.",
  },
  {
    name: "High Performance Computing",
    description:
      "Explore the latest advancements in high performance computing.",
  },
  {
    name: "Biomechanics and Rehabilitation Engineering",
    description:
      "Delve into the world of biomechanics and rehabilitation engineering and their potential to revolutionize industries.",
  },
  {
    name: "High Voltage Engineering and Insulation Technology",
    description:
      "Explore the latest advancements in high voltage engineering and insulation technology.",
  },
  {
    name: "Cloud Computing and Virtualization",
    description:
      "Discuss the future of cloud computing and virtualization and their impact on various industries.",
  },
  {
    name: "Human-Robot Interaction",
    description: "Explore the latest advancements in human-robot interaction.",
  },
  {
    name: "Communication Systems",
    description:
      "Delve into the world of communication systems and their potential to revolutionize industries.",
  },
  {
    name: "Image and Video Processing, Computer Vision and Robotics",
    description:
      "Explore the latest advancements in image and video processing, computer vision, and robotics.",
  },
  {
    name: "Compilers and Natural Language Processing",
    description:
      "Discuss the future of compilers and natural language processing and their impact on various industries.",
  },
  {
    name: "Industrial Automation and Control",
    description:
      "Explore the latest advancements in industrial automation and control.",
  },
  {
    name: "Computational Intelligence in Various Domains",
    description:
      "Delve into the world of computational intelligence and its applications in various domains.",
  },
  {
    name: "Information Systems and Retrieval",
    description:
      "Explore the latest advancements in information systems and retrieval.",
  },
  {
    name: "Computational Mathematics",
    description:
      "Discuss the future of computational mathematics and its impact on various industries.",
  },
  {
    name: "Information Technology Application",
    description:
      "Explore the latest advancements in information technology applications.",
  },
  {
    name: "Computational Physics and Simulation",
    description:
      "Delve into the world of computational physics and simulation and their potential to revolutionize industries.",
  },
  {
    name: "Intelligent Systems and Approach",
    description:
      "Explore the latest advancements in intelligent systems and approaches.",
  },
  {
    name: "Computer Architecture and Embedded Systems",
    description:
      "Discuss the future of computer architecture and embedded systems and their impact on various industries.",
  },
  {
    name: "Internet of Things (IoT)",
    description:
      "Explore the latest advancements in the Internet of Things (IoT).",
  },
  {
    name: "Computer Games and Animation",
    description:
      "Delve into the world of computer games and animation and their potential to revolutionize industries.",
  },
  {
    name: "Knowledge Management",
    description: "Explore the latest advancements in knowledge management.",
  },
  {
    name: "Computer Graphics, Modeling & Virtual Reality",
    description:
      "Discuss the future of computer graphics, modeling, and virtual reality and their impact on various industries.",
  },
  {
    name: "Mathematical Modelling and Optimization",
    description:
      "Explore the latest advancements in mathematical modeling and optimization.",
  },
  {
    name: "Computer Networks, Security, Cryptography & Distributed Computing",
    description:
      "Delve into the world of computer networks, security, cryptography, and distributed computing and their potential to revolutionize industries.",
  },
  {
    name: "Mechatronics",
    description: "Explore the latest advancements in mechatronics.",
  },
  {
    name: "Computer-aided Design and Manufacturing",
    description:
      "Discuss the future of computer-aided design and manufacturing and their impact on various industries.",
  },
  {
    name: "Medical Imaging and Diagnostics",
    description:
      "Explore the latest advancements in medical imaging and diagnostics.",
  },
  {
    name: "Computing and Control in Additive Manufacturing and 3D Printing",
    description:
      "Delve into the world of computing and control in additive manufacturing and 3D printing and their potential to revolutionize industries.",
  },
  {
    name: "Microprocessor based Technologies",
    description:
      "Explore the latest advancements in microprocessor-based technologies.",
  },
  {
    name: "Computing and Control in Ergonomics and Human Factors",
    description:
      "Discuss the future of computing and control in ergonomics and human factors and their impact on various industries.",
  },
  {
    name: "Mobile Computing and Multimedia Applications",
    description:
      "Explore the latest advancements in mobile computing and multimedia applications.",
  },
  {
    name: "Computing and Control in Fluid Mechanics and Heat Transfer",
    description:
      "Delve into the world of computing and control in fluid mechanics and heat transfer and their potential to revolutionize industries.",
  },
  {
    name: "Operation Research and Optimization",
    description:
      "Explore the latest advancements in operation research and optimization.",
  },
  {
    name: "Computing and Control in Project Management and Industrial Innovation",
    description:
      "Discuss the future of computing and control in project management and industrial innovation and their impact on various industries.",
  },
  {
    name: "Parallel and Distributed Computing",
    description:
      "Explore the latest advancements in parallel and distributed computing.",
  },
  {
    name: "Computing and Control in Quality Control and Process Improvement",
    description:
      "Delve into the world of computing and control in quality control and process improvement and their potential to revolutionize industries.",
  },
  {
    name: "Power System Planning and Scheduling",
    description:
      "Explore the latest advancements in power system planning and scheduling.",
  },
  {
    name: "Computing and Control in Supply Chain Management",
    description:
      "Discuss the future of computing and control in supply chain management and their impact on various industries.",
  },
  {
    name: "Power System Protection, Operation and Control",
    description:
      "Explore the latest advancements in power system protection, operation, and control.",
  },
  {
    name: "Computing and Control in Thermodynamics and Energy Systems",
    description:
      "Delve into the world of computing and control in thermodynamics and energy systems and their potential to revolutionize industries.",
  },
  {
    name: "Quantum Mechanics and Quantum Computing",
    description:
      "Explore the latest advancements in quantum mechanics and quantum computing.",
  },
  {
    name: "Computing in Geotechnical and Earthquake Engineering",
    description:
      "Discuss the future of computing in geotechnical and earthquake engineering and its impact on various industries.",
  },
  {
    name: "Semiconductor Technology",
    description: "Explore the latest advancements in semiconductor technology.",
  },
  {
    name: "Computing in Structural Engineering and Mechanics",
    description:
      "Delve into the world of computing in structural engineering and mechanics and their potential to revolutionize industries.",
  },
  {
    name: "Smart Cities and Urban Development",
    description:
      "Explore the latest advancements in smart cities and urban development.",
  },
  {
    name: "Computing in Transportation Engineering and Traffic Management",
    description:
      "Discuss the future of computing in transportation engineering and traffic management and its impact on various industries.",
  },
  {
    name: "Software Architecture and Engineering",
    description:
      "Explore the latest advancements in software architecture and engineering.",
  },
  {
    name: "Computing Practices & Applications in Various Domains",
    description:
      "Delve into the world of computing practices and applications in various domains and their potential to revolutionize industries.",
  },
  {
    name: "Telecommunication Technologies",
    description:
      "Explore the latest advancements in telecommunication technologies.",
  },
  {
    name: "Control Theory and Application",
    description:
      "Discuss the future of control theory and its applications and their impact on various industries.",
  },
  {
    name: "Telemedicine and Health Informatics",
    description:
      "Explore the latest advancements in telemedicine and health informatics.",
  },
  {
    name: "Cybersecurity and Blockchain Technology",
    description:
      "Delve into the world of cybersecurity and blockchain technology and their potential to revolutionize industries.",
  },
  {
    name: "VLSI Technology",
    description: "Explore the latest advancements in VLSI technology.",
  },
  {
    name: "Data Communications, Compression and Encryption",
    description:
      "Discuss the future of data communications, compression, and encryption and their impact on various industries.",
  },
  {
    name: "Wearable Health Monitoring Systems",
    description:
      "Explore the latest advancements in wearable health monitoring systems.",
  },
];

const CallForPapers = () => {
  return (
    <div
      className="min-h-screen p-6 flex flex-col items-center"
      style={{ background: "linear-gradient(135deg, #32a852, #4285f4)" }}
    >
      <h1 className="text-white text-center text-4xl font-bold mb-8">
        Call for Papers
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl w-full">
        {topics.map((topic, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-4 p-6 rounded-lg backdrop-blur-md bg-opacity-30 border border-white transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              boxShadow: "0 4px 30px rgba(255, 255, 255, 0.5)",
            }}
          >
            <h2 className="text-2xl font-semibold text-white">{topic.name}</h2>
            <p className="text-gray-200 text-lg text-justify">
              {topic.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CallForPapers;
