import React from "react";

function AboutMe() {
  return (
    <div
      id="about"
      className="flex-1 flex flex-col  justify-center items-center p-10 gap-10 "
    >
      <h1 className="text-4xl underline font-bold">About Me</h1>
      <span className="flex-grow">
        Hello, I go by Don, a Software Web Developer - Fullstack
        <br /> <br />
        Since attending University I&apos;ve been hired to craft a tailored CRM
        (Customer Relationship Management System) to streamline workflow and
        using that experience I am currently working on a one-man project that I
        hope other developers like myself can utilize to help them.
        <br /> <br />
        From my career, I&apos;ve honed both my front-end and back-end skills.
        Learning new ways to implement UI/UX, ensuring I deliver a clean and
        efficient user experience. I specialize mainly in Next.js and React, but
        have worked with Angular, and Vue as well. I&apos;m most familiar with
        stacks such as MERN (Mongo, Express, React, Node). For backend skills I
        have SQL and MySQL for data analatics.
      </span>
    </div>
  );
}

export default AboutMe;
