import Image from "next/image";
import React from "react";

// const skills = [
//   { name: "Next.js" },
//   { name: "React.js" },
//   { name: "Express" },
//   { name: "Angular" },
//   { name: "Vue" },
//   { name: "Node.js" },
//   { name: "JavaScript" },
//   { name: "jQuery" },
//   { name: "HTML" },
//   { name: "CSS" },
//   { name: "C++" },
//   { name: "Tailwind" },
//   { name: "Framer Motion" },
//   { name: "Bootstrap" },
//   { name: "Material UI" },
//   { name: "MongoDB" },
//   { name: "Firebase" },
//   { name: "PocketBase" },
//   { name: "API" },
//   { name: "REST API" },
//   { name: "MySQL" },
//   { name: "SQL" },
//   { name: "Figma" },
//   { name: "Git" },
//   { name: "Data Analyst" },
//   { name: "Data Entry" },
//   { name: "UI/UX" },
//   { name: "Customer Service" },
//   { name: "Critical Thinking" },
//   { name: "Problem Solving" },
//   { name: "Interpersonal Communication" },
//   { name: "Adaptability" },
//   { name: "Receptionist" },
//   { name: "Information Technology" },
//   { name: "Word" },
//   { name: "Excel" },
//   { name: "PowerPoint" },
//   { name: "FullStack" },
// ];

function Skills() {
  return (
    <div>
      <ShowPNG />
    </div>
  );
}
// function ShowSKILLS() {
//   return (
//     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center ">
//       {skills.map((skill, index) => (
//         <div
//           key={index}
//           className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-blue-500"
//         >
//           <p className="text-white text-sm md:text-base font-medium">
//             {skill.name}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }
function ShowPNG() {
  const skillsPNG = [
    { name: "Next.js", img: "/skills/nextjs.png" },
    { name: "React.js", img: "/skills/react.png" },
    { name: "Express", img: "/skills/express.png" },
    { name: "Vue", img: "/skills/vue.png" },
    { name: "Git", img: "/skills/git.png" },
    { name: "GitHub", img: "/skills/github.png" },
    { name: "JavaScript", img: "/skills/javascript.png" },
    { name: "HTML", img: "/skills/html.png" },
    { name: "Material UI", img: "/skills/mui.png" },
    { name: "Tailwind", img: "/skills/tailwind.png" },
    { name: "CSS", img: "/skills/css.png" },
    { name: "Sass", img: "/skills/sass.png" },
  ];
  return (
    <div className="flex flex-wrap lg:mx-16 lg:my-20 justify-center gap-2 lg:gap-6 ">
      {skillsPNG.map((skill, index) => (
        <div
          key={index}
          className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-blue-500 flex flex-col items-center"
        >
          <Image src={skill.img} alt={skill.name} className="w-16 h-16 mb-2" />
          <p className="text-white text-sm md:text-base font-medium">
            {skill.name}
          </p>
        </div>
      ))}
    </div>
  );
}
export default Skills;
