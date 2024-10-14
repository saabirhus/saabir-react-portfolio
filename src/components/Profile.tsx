
import React from 'react';
import ProfilePicture from './saabir.jpg'; // Add your profile image in the appropriate path
import '../index.css'; // Make sure the CSS file is linked to style the component

const Profile: React.FC = () => {
  return (
    <section className="py-10 bg-gray-25">
      <div className="container mx-auto flex flex-col items-center">
      <div className="flex justify-center items-center mb-6">
      {/* Profile Image */}
      <div className="rounded-full p-1 bg-gradient-to-r from-purple-500 to-green-500">
        <img
            src={ProfilePicture}
            alt="Frontend Developer"
            className="w-64 h-64 rounded-full object-cover"
        />
        </div>
        </div >
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold text-gray-800 mb-2 px-5">Saabir Hussein</h2>
            <p className="text-xl text-gray-600 mb-2 px-5">Junior React Developer</p>
            </div>

            {/* Introduction with Gradient Border */}
            <div className="p-1 rounded-lg my-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <p className="text-gray-700 leading-relaxed">
                Aspiring Junior Frontend Developer with a solid foundation in creating responsive, accessible, and dynamic web applications.
                Proficient in modern frontend technologies like React, JavaScript, and CSS.
                Eager to learn new technologies, improve skills, and take on challenging projects to contribute to building exceptional user experiences.
                </p>
            </div>
        </div>

        {/* Skills Section */}
        <div className="w-full md:w-2/3 text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <li className="bg-gray-100 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl border-l-8 border-purple-500">
                HTML5
                </li>
                <li className="bg-gray-100 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl border-l-8 border-purple-500">
                CSS
                </li>
                <li className="bg-gray-100 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl border-l-8 border-purple-500">
                JavaScript
                </li>
                <li className="bg-gray-100 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl border-l-8 border-purple-500">
                React.js
                </li>
                <li className="bg-gray-100 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl border-l-8 border-purple-500">
                Tailwind CSS
                </li>
                <li className="bg-gray-100 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl border-l-8 border-purple-500">
                TypeScript
                </li>
                <li className="bg-gray-100 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl border-l-8 border-purple-500">
                Redux
                </li>
                <li className="bg-gray-100 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl border-l-8 border-purple-500">
                WordPress
                </li>
                <li className="bg-gray-100 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl border-l-8 border-purple-500">
                Git & GitHub
                </li>
            </ul>
            </div>
      </div>
    </section>
  );
};

export default Profile;
