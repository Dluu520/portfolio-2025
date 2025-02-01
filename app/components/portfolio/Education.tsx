import React from "react";

function Education() {
  return (
    <section
      id="education"
      className="flex-1 flex flex-col  items-center p-8 gap-6 bg-gradient-to-b from-gray-900"
    >
      <h1 className="text-4xl font-bold underline decoration-blue-500">
        Education
      </h1>
      <div className="max-w-2xl text-lg">
        <div className="flex justify-between font-bold">
          <h1>University of Central Oklahoma</h1>
        </div>
        <h2 className="text-lg font-semibold">
          Bachelor of Science in Computer Science - Major GPA 3.00.
        </h2>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>
            Relevant Coursework: Data Structures, Algorithms, Database
            Management, Agile Development, Software Engineering, and Leadership.
          </li>
          <li>
            Key Skills: Proficient in multiple programming languages, database
            systems, and agile/scrum methodologies.
          </li>
          <li>
            Scrum Master Experience: Led cross-functional teams as a Scrum
            Master, responsible for creating project requirements, reviewing
            goals, facilitating meetings, and ensuring timely delivery of
            milestones.
          </li>
          <li>
            Projects: Developed a web-based student enrollment system using PHP,
            HTML, CSS, and SQL. Collaborated on a team-based CRM application.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Education;
