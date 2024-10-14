import React from "react";

const Projects: React.FC = () => { //React.FC = React Function Component
    return (
        <section className="py-5 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold">FST Academy</h3>
                        <p className="text-gray-700 mt-2">
                            6-month self-paced Bootcamp designed to equip you with the skills needed to excel in software development.
                            <br/>
                            <a href="https://fstacademy.com"
                                className="text-purple-500 mt-4 inline-block">
                                View Project
                            </a>
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold">London Junior Developers</h3>
                        <p className="text-gray-700 mt-2">
                            A community for junior developers in London to connect, learn and grow together.
                            <br/>
                            <a href="https://londonjuniordevelopers.com"
                                className="text-purple-500 mt-4 inline-block">
                                View Project
                            </a>
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold">Tuition Centre Management System</h3>
                        <p className="text-gray-700 mt-2">
                            An application hub for tuition centers worldwide to help support the admin side of their schools.
                            <br/>
                            <a href="" 
                                className="text-purple-500 mt-4 inline-block">
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