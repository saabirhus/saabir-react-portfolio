import React from "react";

const CV: React.FC = () => {
    return (
        <section id="cv" className="py-10">
            <div className="container mx-auto">
                <h2 className="text-4xl text-white font-bold mb-6 text-center">My Resume</h2>

                <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-6">
                    {/* First CV page image */}
                    <img 
                        src="/saabir_page1.jpg"  // First CV page image
                        alt="Saabir Hussein's Resume Page 1"
                        className="border-2 border-pink-700"
                        style={{ width: '400px', height: 'auto' }}  // Adjust width as needed
                    />

                    {/* Second CV page image */}
                    <img 
                        src="/saabir_page2.jpg"  // Second CV page image
                        alt="Saabir Hussein's Resume Page 2"
                        className="border-2 border-pink-700 mt-6 lg:mt-0"  // Add margin on small screens
                        style={{ width: '400px', height: 'auto' }}  // Adjust width as needed
                    />
                </div>

                {/* Download button below the images */}
                <div className="mt-6 text-center">
                    <p className="text-lg text-white mb-4">
                        Click the button below to download my resume.
                    </p>
                    <a 
                        href="/saabir_cv.pdf"  // Reference to the PDF file
                        className="bg-pink-600 text-white py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-pink-700"
                        download="Saabir_Hussein_Resume.pdf"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CV;
