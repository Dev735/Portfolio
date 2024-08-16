import React from 'react';
import photo from "../assets/photo.jpeg";
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  

  return (
    <div className='bg-black text-white text-center py-16'>
      <img src={photo} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
      <h1 className='text-4xl font-bold'>
        I'm 
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'> Dev Gupta</span>
        ,
        <span>  
          <Typewriter
          words={['Full-Stack Web Developer','Cybersecurity Specialist','Embedded Systems Engineer','Network Engineer']}
          loop={5}
          cursor
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}/>
        </span>
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
        I specialize in building modern and responsive web applications.
      </p>
      <div className='mt-8 space-x-4'>
        <a href="#contact" className='bg-gradient-to-r from-green-400 to-blue-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>connect with me</a>
        <a href='https://drive.google.com/file/d/1pKnTAEA7U3r4Xs3rvmVvKEvShS4c9mzl/view?usp=drivesdk' className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</a>
      </div>
    </div>
  );
}

export default Hero;
