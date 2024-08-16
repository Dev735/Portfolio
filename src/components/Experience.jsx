import React from "react";

const experiences = [
  {
    year: "6th Jan,2023-7th Feb,2023",
    role: "Embedded System Design and Iot Intern",
    company: "Pantech Solutions",
    description: `Developed and implemented embedded systems and IoT solutions, enhancing device connectivity and automation.
    Collaborated with a team of engineers to design, test, and deploy IoT projects, ensuring seamless integration and functionality.
    Conducted research on emerging IoT technologies and trends to incorporate innovative solutions into projects.
    Performed debugging and troubleshooting to resolve hardware and software issues, improving system reliability and performance.`,
    technologies: ["Microcontrollers","RTOS","Circuit Design","IOT"],
  },
  {
    year: "12th Jun,2023 - 24th July,2023",
    role: "Frontend Developer",
    company: "Edunet Foundation",
    description: ` Responsible for developing Frontend web applications based on HTML, CSS and JavaScript.
    Independently tackled the challenge of crafting a interactive music player website.
    Learnt how to deploy web applications.
    Worked on key technologies like Javascript, HTML and CSS.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  
  
];


const Experience = () => {
  return (
   <div className="bg-black px-1 py-1" id="experience">
    <h2 className="text-4xl font-bold text-center text-neutral-100 mb-12">Experience</h2>
    <div>
      {experiences.map((exp) => (
        <div className="mb-8 flex flex-wrap lg:justify-center">
           <div className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-neutral-400">{exp.year}</p>
           </div>
           <div className="w-full max-w-full lg:w-3/4">
            <h6 className="mb-2 font-semibold text-sky-100">{exp.role} -{" "}
            <span className="text-sm text-sky-100"> 
            {exp.company}</span> 
            </h6>
            <p className="mb-4 text-neutral-400">{exp.description}</p>
            {exp.technologies.map((tech) =>(
              <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-sky-800">{tech}</span>
            ))}
           </div>
        </div>
      ))}
    </div>
   </div>
  );
};

export default Experience;