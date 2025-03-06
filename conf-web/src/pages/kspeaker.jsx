import React from "react";
import { motion } from "framer-motion";
import "./kspeaker.css";

const speakers = [
  {
    name: "Dr. John Doe",
    university: "Harvard University",
    topic: "Artificial Intelligence",
    image: "https://via.placeholder.com/200",
  },
  {
    name: "Dr. Jane Smith",
    university: "Stanford University",
    topic: "Quantum Computing",
    image: "https://via.placeholder.com/200",
  },
  // Add more speakers as needed
];

const KSpeaker = () => {
  return (
    <div className="bg-purple-600 min-h-screen text-white p-6 flex flex-col items-center">
      <nav className="bg-purple-800 p-6 shadow-md w-full">
        <h1 className="text-center text-4xl font-bold text-white">
          Conference Speakers
        </h1>
      </nav>
      <div className="max-w-4xl w-full flex flex-col items-center mt-12 space-y-12">
        {speakers.map((speaker, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-8 p-8 rounded-lg shadow-lg w-full max-w-lg backdrop-blur-md bg-purple-500 bg-opacity-30 border border-purple-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-36 h-36 rounded-full object-cover border-4 border-purple-400 shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-semibold text-white">
                {speaker.name}
              </h2>
              <p className="text-gray-200 text-lg">{speaker.university}</p>
              <p className="font-medium text-white text-lg">
                Topic: {speaker.topic}
              </p>
              <p className="text-gray-300 mt-3 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                quam velit.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default KSpeaker;
