import React from "react";
import '../index.css';

const ContactMe: React.FC = () => {
    return (
        <section className="py-10 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
                <div className="flex justify-center">
                    {/* Centered Contact Form */}
                    <form action="#" method="POST" className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-400 mb-2">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-400 mb-2">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-400 mb-2">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Enter your message"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
