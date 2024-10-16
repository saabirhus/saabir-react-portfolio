import React from "react";
import '../index.css';

const Skills: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center pt-16">
      <h3 className="text-4xl font-semibold text-white mb-8">Skills</h3>
      <ul className="grid grid-cols-2 gap-8 w-full">
        <li className="w-full bg-gray-800 text-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl border-l-8 border-purple-300">
          HTML5
        </li>
        <li className="w-full bg-gray-800 text-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl border-l-8 border-purple-300">
          CSS
        </li>
        <li className="w-full bg-gray-800 text-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl border-l-8 border-purple-300">
          JavaScript
        </li>
        <li className="w-full bg-gray-800 text-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl border-l-8 border-purple-300">
          React.js
        </li>
        <li className="w-full bg-gray-800 text-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl border-l-8 border-purple-300">
          Tailwind CSS
        </li>
        <li className="w-full bg-gray-800 text-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl border-l-8 border-purple-300">
          TypeScript
        </li>
        <li className="w-full bg-gray-800 text-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl border-l-8 border-purple-300">
          Redux
        </li>
        <li className="w-full bg-gray-800 text-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl border-l-8 border-purple-300">
          WordPress
        </li>
      </ul>
    </div>
  );
};

export default Skills;
