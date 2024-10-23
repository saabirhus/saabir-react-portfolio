import React from 'react';
import Profile from './Profile'; // Import Profile component
import Skills from './Skills';   // Import Skills component
import '../index.css';

const ProfileAndSkills: React.FC = () => {
  return (
    <section className="mt-10 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start h-full">
        {/* Profile on the left */}
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-between">
          <Profile />
        </div>
        {/* Skills on the right */}
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-between h-full">
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default ProfileAndSkills;
