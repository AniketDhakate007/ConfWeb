import React from "react";

const speakers = [
  {
    photo: "https://avatar.iran.liara.run/public/boy?username=Ash",
    name: "Speaker One",
    university: "University A",
    topic: "Topic A",
    description: "Description A",
  },
  {
    photo: "https://avatar.iran.liara.run/public/boy?username=Ash",
    name: "Speaker Two",
    university: "University B",
    topic: "Topic B",
    description: "Description B",
  },
  // Add more speakers as needed
];

export default function KeynoteSpeakers() {
  return (
    <div className="bg-purple-100 p-8">
      <h1 className="text-4xl text-purple-800 font-bold mb-8">
        Keynote Speakers
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
          >
            <img
              src={speaker.photo}
              alt={speaker.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-2xl text-purple-700 font-semibold">
                {speaker.name}
              </h2>
              <p className="text-purple-600">{speaker.university}</p>
              <p className="text-purple-500">{speaker.topic}</p>
              <p className="text-gray-700 mt-2">{speaker.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
