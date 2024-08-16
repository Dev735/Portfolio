import React from "react";
import photo from "../assets/photo.jpeg";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={photo}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences.
            </p>
            <div>
            <h3 className="text-2xl font-bold text-center mb-7">My Skills</h3>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-sky-800">HTML</span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-sky-800">CSS</span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-sky-800">Javascript</span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-sky-800">React.js</span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-sky-800">Node.js</span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-sky-800">Express</span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-sky-800">SQL</span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-sky-800">Java</span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-sky-800">Computer Networks</span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-sky-800">Network Security</span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-sky-800">Embedded Systems</span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-sky-800">IOT</span>
           
            
            
            



            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;