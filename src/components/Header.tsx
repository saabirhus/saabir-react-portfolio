import React from "react";
import '../index.css';

const Header: React.FC = () => {
    return (
        <header className="py-5" id="home" style={{ backgroundColor: '#0b0e1f' }}>
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
                    <a href="#home" className="text-lg text-white transition-colors duration-300 hover:text-pink-600">
                        Home
                    </a>
                    <a href="#profile" className="text-lg text-white transition-colors duration-300 hover:text-pink-600">
                        Profile/Skills
                    </a>
                    <a href="#projects" className="text-lg text-white transition-colors duration-300 hover:text-pink-600">
                        Projects
                    </a>
                    <a href="#contact" className="text-lg text-white transition-colors duration-300 hover:text-pink-600">
                        Contact
                    </a>
                        <a href="#cv" className="text-lg text-white transition-colors duration-300 hover:text-pink-600">
                        Resume
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
