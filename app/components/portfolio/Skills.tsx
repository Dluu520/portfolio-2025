import React from "react";

const skills = [
  { name: "Next.js" },
  { name: "React.js" },
  { name: "Express" },
  { name: "Angular" },
  { name: "Vue" },
  { name: "Node.js" },
  { name: "JavaScript" },
  { name: "jQuery" },
  { name: "HTML" },
  { name: "CSS" },
  { name: "C++" },
  { name: "Tailwind" },
  { name: "Framer Motion" },
  { name: "Bootstrap" },
  { name: "Material UI" },
  { name: "MongoDB" },
  { name: "Firebase" },
  { name: "PocketBase" },
  { name: "API" },
  { name: "REST API" },
  { name: "MySQL" },
  { name: "SQL" },
  { name: "Figma" },
  { name: "Git" },
  { name: "Data Analyst" },
  { name: "Data Entry" },
  { name: "UI/UX" },
  { name: "Customer Service" },
  { name: "Critical Thinking" },
  { name: "Problem Solving" },
  { name: "Interpersonal Communication" },
  { name: "Adaptability" },
  { name: "Receptionist" },
  { name: "Information Technology" },
  { name: "Word" },
  { name: "Excel" },
  { name: "PowerPoint" },
  { name: "FullStack" },
];

function Skills() {
  return (
    <section
      id="skills"
      className="snap-center flex flex-col justify-center items-center p-8 gap-6  to-gray-800 "
    >
      <h1 className="text-4xl font-bold underline decoration-blue-500">
        Skills
      </h1>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 hover:scale-105 transition-all duration-300"
          >
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
