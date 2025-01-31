/* eslint-disable */
"use client";
import React from "react";
import styles from "@/app/ui/experience.module.css";
import { useState } from "react";

const experiences = [
  {
    started: 2020,
    ended: 2022,
    position: "IT/Receptionist",
    employer: "UCO LXstudio INC.",
    jd: [
      "Communicated directly with clients via email and in person to assess needs, ensuring accurate and timely delivery of supplies and assistance. Achieved a 95% client satisfaction rate by maintaining professionalism and responsiveness in all client interactions.",
      "Coordinated campus-wide device maintenance and collaborated with team members to ensure systems were up-to-date, contributing to a 90% reduction in device-related issues across departments.",
      " Diagnosed and resolved complex A/V and IT issues efficiently, cutting average downtime by 50%. Documented each issue in a ticketing system, improving troubleshooting processes and ensuring clear communication with technical support teams.",
    ],
  },
  {
    started: 2022,
    ended: 2023,
    position: "Software Web Developer",
    employer: "Good Greek Moving and Storage",
    jd: [
      "Optimized frontend code using React and Redux, achieving a 40% reduction in load times for single-page applications, improving user engagement and reducing bounce rates by 20%.",
      "Reduced development cycles by 30% by implementing agile practices and automated testing with TypeScript and Jest, enabling faster production releases and minimizing bugs by 20%.",
      "Optimized database queries with MongoDB, enhancing data retrieval speed by 40% for faster decision-making.",
      "Designed and deployed intuitive UI components using MUI and custom CSS, elevating user satisfaction by 70% based on feedback. Leveraged MongoDB for efficient data handling, resulting in a 25% faster data retrieval time and a seamless, responsive user experience across all devices.",
    ],
  },
  {
    started: 2023,
    ended: -1,
    position: "Server",
    employer: "Hunan Garden",
    jd: [
      "Strong interpersonal and communication skills to interact positively with guests.",
      "Delivered excellent customer service, increasing repeat customer visits by 70% through attentive and personalized service.",
      "Managed up to 7 tables per shift in a high-pressure environment, maintaining a 99% order accuracy rate.",
      "Improved operational efficiency by prioritizing tasks and coordinating with the kitchen staff to reduce wait times by 20%.",
      "Assisted with inventory stocking and product rotation, ensuring freshness and reducing waste by 10%.",
      "Maintained compliance with health and safety standards by ensuring cleanliness and sanitation in all work areas.",
      "Performed physically demanding tasks, including standing for 6-8 hours per shift, running, walking, and lifting trays or other materials up to 50 lbs.",
    ],
  },
];

function Experience() {
  const reversedList = experiences.slice().reverse();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index: any) => {
    setExpandedIndex(index === expandedIndex ? null : index); // Toggle expansion
  };
  return (
    <div className="flex-1 flex flex-col gap-10 justify-center items-center p-10 mt-32 bg-[linear-gradient(35deg,_#f5f5f5_50%,_#1a202c_50%)]">
      <div className=" border-[1px] border-dotted  w-[80%] "></div>
      <h1 className="text-4xl underline font-bold text-white">Experience</h1>
      <span className={`${styles.timeline} `}>
        {reversedList.map((exp, index) => {
          const positionClass = index % 2 === 0 ? styles.left : styles.right;
          const isExpanded = expandedIndex === index; // Check if the current item is expanded

          return (
            <ul
              key={index}
              className={`${styles.container} ${positionClass} ${
                isExpanded ? styles.expanded : ""
              } `}
              onClick={() => handleExpand(index)}
            >
              <div
                className={`${styles.content} ${
                  isExpanded ? "expanded" : ""
                } text-[#2c3e50] `}
              >
                <h2 className="text-[#2c3e50]">
                  {exp.started} - {exp.ended === -1 ? "Current" : exp.ended}
                </h2>
                <h3 className="font-bold text-lg text-[#2c3e50]">
                  {exp.position}
                </h3>
                <ol>
                  {exp.jd.map((each, jdIndex) => (
                    <li key={jdIndex}>{each}</li>
                  ))}
                </ol>
              </div>
            </ul>
          );
        })}
      </span>
    </div>
  );
}

// function temp() {
//   const reversedList = experiences.slice().reverse();
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const handleExpand = (index: any) => {
//     setExpandedIndex(index === expandedIndex ? null : index); // Toggle expansion
//   };

//   return (
//     <div className="flex-1 flex flex-col gap-10 justify-center items-center p-10 bg-gray-500">
//       <h1 className="text-4xl underline font-bold">Experience</h1>
//       <span className={styles.timeline}>
//         {reversedList.map((exp, index) => {
//           const positionClass = index % 2 === 0 ? styles.left : styles.right;
//           const isExpanded = expandedIndex === index;

//           return (
//             <ul
//               key={index}
//               className={`${styles.container} ${positionClass} ${
//                 isExpanded ? styles.expanded : ""
//               }`}
//               onClick={() => handleExpand(index)}
//             >
//               <div className={`${styles.content}`}>
//                 <h2>
//                   {exp.started} - {exp.ended === -1 ? "Current" : exp.ended}
//                 </h2>
//                 <h3 className="font-bold text-lg">{exp.position}</h3>
//                 <p className="italic text-sm">{exp.employer}</p>
//                 {/* Show details only if expanded */}
//                 {isExpanded && (
//                   <ol>
//                     {exp.jd.map((each, jdIndex) => (
//                       <li key={jdIndex}>{each}</li>
//                     ))}
//                   </ol>
//                 )}
//               </div>
//             </ul>
//           );
//         })}
//       </span>
//     </div>
//   );
// }
export default Experience;
