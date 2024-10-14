import React from "react";
import '../index.css';

const Header: React.FC = () => {
    return (
        <header className="bg-gradient-to-r from-purple-500 to-green-500 py-10">
            <div className="container mx-auto flex items-center justify-between">
                {/* Flex container for image and text */}
                <div className="flex items-center">
                    <div>
                        <h1 className="text-4xl font-bold text-white">Saabir Hussein</h1>
                        <p className="text-xl text-white mt-2">Junior React Developer</p>
                    </div>
                </div>

                {/* Flexbox for navigation and align to the left */}
                <nav className="flex items-center space-x-4">
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#cv" className="nav-link">CV</a>
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#achievement" className="nav-link">Achievement</a>
                    <a href="#hobbies" className="nav-link">Hobbies</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
