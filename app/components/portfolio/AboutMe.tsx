import React from "react";

function AboutMe() {
  return (
    <section
      id="about"
      className="flex-1 flex flex-col  items-center p-8 gap-6 bg-gradient-to-b from-gray-900"
    >
      <h1 className="text-4xl font-bold underline decoration-blue-500">
        About Me
      </h1>
      <p className="text-lg text-center max-w-2xl leading-relaxed">
        Hello, my name is Don, and I am a Full Stack Software Developer with a
        passion for creating efficient and user-friendly web applications.{" "}
        <br /> <br />
        During my academic journey, I had the opportunity to develop a
        customized CRM (Customer Relationship Management System) designed to
        streamline workflows and enhance productivity. Building on that
        experience, I am currently working on an independent project aimed at
        providing valuable tools and resources for fellow developers.
        <br /> <br />
        Throughout my career, I have cultivated expertise in both front-end and
        back-end development, consistently striving to deliver clean, intuitive,
        and high-performing user interfaces. My primary focus lies in leveraging
        modern technologies such as Next.js and React, though I also have
        hands-on experience with Angular and Vue. I am proficient in the MERN
        stack (MongoDB, Express, React, Node.js) and possess strong backend
        skills, including SQL and MySQL, for data analytics and management.
      </p>
    </section>
  );
}

export default AboutMe;
