import React from "react";
import '../index.css';

const Header: React.FC = () => {
    return (
        <header className="py-10" id="home">
            <div className="container mx-auto flex items-center justify-between">
                {/* Flex container for name and developer title */}
                <div className="flex items-center">
                    <div>
                        <h1 className="text-4xl font-bold text-white">Saabir Hussein</h1>
                        <p className="text-xl text-white mt-2">Junior React Developer</p>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex items-center space-x-4">
                    <a href="#home" className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                        Home
                    </a>
                    <a href="#profile" className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                        Profile
                    </a>
                    <a href="#skills" className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                        Skills
                    </a>
                    <a href="#projects" className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                        Projects
                    </a>
                    <a href="#hobbies" className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                        Hobbies
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
