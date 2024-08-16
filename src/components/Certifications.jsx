import React from "react";
import cyber from "../assets/cyber.jpeg";
import sup from "../assets/sup.jpeg";
import reactc from "../assets/reactc.jpeg";

const certifications = [
  {
    id: 1,
    name: "FullStack Web Development with React",
    Org: "Coursera",
    technologies: "MERN Stack",
    Duration: "6 Weeks",
    image: reactc,
    github: "https://coursera.org/share/b3962522632e5f855e1efa31258c6e36",
  },
  {
    id: 2,
    name: "Google Cybersecurity",
    Org: "Coursera",
    technologies: "Microcontrollers,IOT,RTOS,Circuit Design",
    image: cyber,
    github: "https://www.coursera.org/account/accomplishments/specialization/MPWYVQWUYBRM?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Ds12n",
  },
  
  {id: 3,
  name: "Google It Support",
 image: sup,
  github: "https://coursera.org/share/3f973dfcc6c4f23880a7ff6ea86f97f9",
},
];

const Certifications = () => {
  return (
    <div className="bg-black text-white py-20" id="certification">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">Link</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;