import React from 'react';
import ProfilePicture from './saabir.jpg'; // Add your profile image in the appropriate path
import '../index.css';

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center mb-6">
        {/* Profile Image */}
        <div className="rounded-full p-1 bg-gradient-to-r from-purple-500 to-green-500">
          <img
            src={ProfilePicture}
            alt="Frontend Developer"
            className="w-64 h-64 rounded-full object-cover"
          />
        </div>
      </div>
      <div className="bg-gray-600 p-4 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-2 px-5">Saabir Hussein</h2>
        <p className="text-xl mb-2 px-5">Junior React Developer</p>
      </div>

      {/* Introduction */}
      <div className="p-1 rounded-lg my-8">
        <div className="bg-gray-600 p-6 rounded-lg shadow-lg">
          <p className="leading-relaxed">
            Aspiring Junior Frontend Developer with a solid foundation in creating responsive,
            accessible, and dynamic web applications. Proficient in modern frontend technologies
            like React, JavaScript, and CSS. Eager to learn new technologies, improve skills, and
            take on challenging projects to contribute to building exceptional user experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
