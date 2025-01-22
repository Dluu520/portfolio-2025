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
      "Communicated with clients to inquire about details of the service and assistance needed.",
      "Troubleshot complex environments and A/V equipment, isolated issues, and documented them through ticketing.",
      "Coordinated with team members to maintain computers and devices across campus",
    ],
  },
  {
    started: 2022,
    ended: 2023,
    position: "Software Web Developer",
    employer: "Good Greek Moving and Storage",
    jd: [
      "Full Stack Web Developer that built a CRM to streamline workflow.",
      "Designed, modeled, and created schemas to improve user experience and interface for CRM.",
      "Developed with JavaScript, CSS, and HTML, using React for reusable components and state management.",
      "Leveraged Next.js for server-side rendering, routing, and serverless API endpoints. Utilized MongoDB for scalable backend database management, integrating data via API endpoints.",
      "Managed the project through GitHub for version control during development, deployment,testing, maintenance, and rollback phases.",
    ],
  },
  {
    started: 2023,
    ended: -1,
    position: "Server",
    employer: "Hunan Garden",
    jd: [
      "Strong interpersonal and communication skills to interact positively with guests.",
      "Remain calm and efficient in a fast-paced, high-pressure environment juggle multiple tables and prioritize tasks.",
      "Accurately take orders and collaborate with kitchen staff and other waiters for smooth operations and delivery of the correct items.",
      "Stand and move quickly for long periods.",
      "Handle complaints or issues promptly and professionally.",
      "Understand and Recall menu items, specials, and guests' preferences or explain menu items, ingredients, and preparation methods to new guests.",
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

function temp() {
  const reversedList = experiences.slice().reverse();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index: any) => {
    setExpandedIndex(index === expandedIndex ? null : index); // Toggle expansion
  };

  return (
    <div className="flex-1 flex flex-col gap-10 justify-center items-center p-10 bg-gray-500">
      <h1 className="text-4xl underline font-bold">Experience</h1>
      <span className={styles.timeline}>
        {reversedList.map((exp, index) => {
          const positionClass = index % 2 === 0 ? styles.left : styles.right;
          const isExpanded = expandedIndex === index;

          return (
            <ul
              key={index}
              className={`${styles.container} ${positionClass} ${
                isExpanded ? styles.expanded : ""
              }`}
              onClick={() => handleExpand(index)}
            >
              <div className={`${styles.content}`}>
                <h2>
                  {exp.started} - {exp.ended === -1 ? "Current" : exp.ended}
                </h2>
                <h3 className="font-bold text-lg">{exp.position}</h3>
                <p className="italic text-sm">{exp.employer}</p>
                {/* Show details only if expanded */}
                {isExpanded && (
                  <ol>
                    {exp.jd.map((each, jdIndex) => (
                      <li key={jdIndex}>{each}</li>
                    ))}
                  </ol>
                )}
              </div>
            </ul>
          );
        })}
      </span>
    </div>
  );
}
export default Experience;
