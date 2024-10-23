import React from "react";
import '../index.css';

const Footer: React.FC = () => {
    return (
        <footer className=" text-white py-6" style={{ backgroundColor: '#0b0e1f' }}>
            <div className="container mx-auto text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Me</h3>
                        <p className="text-gray-400">
                            Junior Frontend Developer passionate about creating modern, responsive, and dynamic web applications.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Social Media</h3>
                        <div className="flex justify-center space-x-4">
                            <a href="https://www.linkedin.com/in/saabirhussein/" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-white transition-colors">
                                LinkedIn
                            </a>
                            <a href="https://github.com/saabirhus" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-white transition-colors">
                                GitHub
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <p className="text-gray-400">
                            Email: <a href="mailto:saabirhus2003@gmail.com" className="text-purple-500 hover:text-white transition-colors">saabirhus2003@gmail.com</a>
                        </p>
                        <p className="text-gray-400">
                            Phone: <span className="text-purple-500">+44 7947881924</span>
                        </p>
                    </div>
                </div>
                <div className="mt-8 text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Saabir Hussein. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
