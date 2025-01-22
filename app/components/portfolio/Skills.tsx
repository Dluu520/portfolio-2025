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
  { name: "C++ " },
  { name: "Tailwind" },
  { name: "Framer Motion" },
  { name: "Bootstrap" },
  { name: "Material UI" },
  { name: "MongoDB" },
  { name: "Firebase" },
  { name: "PocketBase" },
  { name: "API" },
  { name: "SQL" },
  { name: "Figma" },
  { name: "Git" },
  { name: "Data Analysis" },
  { name: "UI/UX" },
];
function Skills() {
  return (
    <div
      id="skills"
      className="snap-center h-screen flex flex-col justify-center items-center p-10 md:p-32 gap-10 inset-0 bg-gradient-to-br from-blue-500 to-green-500 opacity-80"
    >
      <h1 className="text-4xl underline font-bold">Skills</h1>
      <div className="justify-center overflow-hidden flex flex-wrap gap-6 w-full md:w-[80%] lg:w-[50%] text-white">
        {skills.map((skill, index) => {
          return (
            <ul
              key={index}
              className="bg-blue-900/50 text-center rounded-lg p-2 hover:bg-blue-400 hover:scale-105"
            >
              {skill.name}
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
