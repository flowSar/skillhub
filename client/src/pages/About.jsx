import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-red-300 h-screen relative">
        Hello world
        <div className="loading absolute inset-0 flex items-center justify-center">
          <p className="w-[8rem] text-center">Please wait...</p>
          <div className="spinner"></div>
      </div>
      </div>
    
    
    </>
  );
};

export default About;
