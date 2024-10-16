import React from "react";
import '../index.css';

const Projects: React.FC = () => {
    return (
        <section className="pb-5 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Projects I have been a part of:</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    <div className="bg-gray-800 rounded-lg shadow-md p-6 border-l-8 border-purple-300">
                        <h3 className="text-xl font-semibold">FST Academy</h3>
                        <p className="mt-2">
                            6-month self-paced Bootcamp designed to equip you with the skills needed to excel in software development.
                            <br/>
                            <a target="_blank" href="https://fstacademy.com" className="text-purple-500 mt-4 inline-block">
                                View Project
                            </a>
                        </p>
                    </div>
                    <div className="bg-gray-800 rounded-lg shadow-md p-6 border-l-8 border-purple-300">
                        <h3 className="text-xl font-semibold">London Junior Developers</h3>
                        <p className="mt-2">
                            A community for junior developers in London to connect, learn, and grow together.
                            <br/>
                            <a target="_blank" href="https://londonjuniordevelopers.com" className="text-purple-500 mt-4 inline-block">
                                View Project
                            </a>
                        </p>
                    </div>
                    <div className="bg-gray-800 rounded-lg shadow-md p-6 border-l-8 border-purple-300">
                        <h3 className="text-xl font-semibold">Tuition Centre Management System</h3>
                        <p className="mt-2">
                            An application hub for tuition centers worldwide to help support the admin side of their schools.
                            <br/>
                            <a target="_blank" href="" className="text-purple-500 mt-4 inline-block">
                                View Project
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
