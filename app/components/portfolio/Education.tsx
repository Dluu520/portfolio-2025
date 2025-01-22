import React from "react";

function Education() {
  return (
    <div
      id="education"
      className="flex-1 flex flex-col  justify-center items-center p-10 gap-10 "
    >
      <h1 className="text-4xl underline font-bold">Education</h1>
      <span className="flex-grow ">
        <div className="flex justify-between font-bold text-xl">
          <h1>University of Central Oklahoma</h1>
        </div>
        <h2 className="text-lg">Bachelor of Science in Computer Science</h2>
        <span>
          <div className="text-sm">
            <li>
              Use of different programming languages, database and agile/scrum
              environment.
            </li>
            <li>
              Experience as a scrum master to create requirements, review goals,
              assemble meetings, and create/complete deadlines.
            </li>
            <li>Major GPA of 3.00.</li>
          </div>
        </span>
      </span>
    </div>
  );
}

export default Education;
