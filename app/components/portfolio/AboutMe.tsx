import React from "react";
import Skills from "./Skills";
import Image from "next/image";

// const template =
//   "Hello, my name is Don, and I am a Full Stack Software Developer with a passion for creating efficient and user-friendly web applications.During my academic journey, I had the opportunity to develop a customized CRM (Customer Relationship Management System) designed to streamline workflows and enhance productivity. Building on that experience, I am currently working on an independent project aimed at providing valuable tools and resources for fellow developers. Throughout my career, I have cultivated expertise in both front-end and back-end development, consistently striving to deliver clean, intuitive, and high-performing user interfaces. My primary focus lies in leveraging modern technologies such as Next.js and React, though I also have hands-on experience with Angular and Vue. I am proficient in the MERN stack (MongoDB, Express, React, Node.js) and possess strong backend skills, including SQL and MySQL, for data analytics and management.";
const template2 =
  "Passionate about creating quality application with clean UI/UX. I'm a full stack web developer based in Orlando, Florida, with a expertise in Next.js, React, and web development. When I'm not coding, I am usually playing my guitar, making music, reading, or going to the gym.";

function AboutMe() {
  return (
    <section
      id="about"
      className="flex-1 flex flex-col  p-10 lg:p-20 gap-8  min-h-screen lg:mx-24"
    >
      <h1 className="flex text-4xl font-bold underline justify-center decoration-blue-500 mb-4">
        About
      </h1>
      {/* Container for Headshot, Intro, Skills, Education */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 ">
        <div className="flex flex-col items-center gap-6 lg:my-20">
          {/* Profile Headshot */}
          <Image
            src="/profile-headshot.jpeg"
            alt="Profile Headshot"
            className="w-44 h-50 md:w-52 md:h-60 rounded-full border-4 border-blue-500 shadow-lg"
          />

          {/* Introduction Text */}
          <p className="text-lg text-center md:text-left leading-relaxed md:leading-loose max-w-2xl mx-auto md:mx-0  dark:text-gray-300 tracking-wide font-medium">
            {template2}
          </p>
        </div>
        {/* Skills Component */}
        <div className="">
          <Skills />
        </div>

        {/* Experience Component */}
        {/* <div className="w-full max-w-4xl mt-8">
          <Education />
        </div> */}
      </div>
      {/* <Certifications /> */}
    </section>
  );
}

export default AboutMe;
