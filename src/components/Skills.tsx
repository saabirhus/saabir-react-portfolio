import React from "react";
import '../index.css';

const Skills: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-start h-full">
      {/* Align Skills Header */}
      <h3 className="text-4xl font-semibold text-white mb-8 self-start">Skills</h3>
      {/* Skills List */}
      <ul className="grid grid-cols-2 gap-8 w-full">
        <li className="w-full bg-gray-600 text-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl border-l-8 border-purple-300">
          HTML5
        </li>
        <li className="w-full bg-gray-600 text-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl border-l-8 border-purple-300">
          CSS
        </li>
        <li className="w-full bg-gray-600 text-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl border-l-8 border-purple-300">
          Javascript
        </li>
        <li className="w-full bg-gray-600 text-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl border-l-8 border-purple-300">
          React.js
        </li>
        <li className="w-full bg-gray-600 text-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl border-l-8 border-purple-300">
          SQL
        </li>
        <li className="w-full bg-gray-600 text-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl border-l-8 border-purple-300">
          TypeScript
        </li>
        <li className="w-full bg-gray-600 text-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl border-l-8 border-purple-300">
          Git/Github
        </li>
        <li className="w-full bg-gray-600 text-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl border-l-8 border-purple-300">
          WordPress
        </li>
        <li className="w-full bg-gray-600 text-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl border-l-8 border-purple-300">
          Linux
        </li>
        <li className="w-full bg-gray-600 text-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl border-l-8 border-purple-300">
          C#
        </li>
        <li className="w-full bg-gray-600 text-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl border-l-8 border-purple-300">
          Node.js
        </li>
        <li className="w-full bg-gray-600 text-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl border-l-8 border-purple-300">
          Redux.js
        </li>
        
      </ul>
    </div>
  );
};

export default Skills;
