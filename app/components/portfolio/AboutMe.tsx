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
        Since attending University I've been hired to craft a tailored CRM
        (Customer Relationship Management System) to streamline workflow and
        using that experience I am currently working on a one-man project that I
        hope other developers like myself can utilize to help them.
        <br /> <br />
        From my career, I've honed both my front-end and back-end skills.
        Keeping up with the latest trends is a priority for me, ensuring I
        deliver a clean and efficient UI for user experience. I specialize
        mainly in Next.js and React, but have worked with Angular, and Vue as
        well. I'm most familiar with stacks such as MERN (Mongo, Express, React,
        Node). For backend skills I have SQL/MySQL/NoSQL for data analyst /
        entry experience.
      </span>
    </div>
  );
}

export default AboutMe;
