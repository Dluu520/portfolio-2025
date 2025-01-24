"use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";
import Hero from "./components/portfolio/Hero";
import AboutMe from "./components/portfolio/AboutMe";
import Experience from "./components/portfolio/Experience";
import Education from "./components/portfolio/Education";
import Projects from "./components/portfolio/Projects";
import Skills from "./components/portfolio/Skills";
import ContactMe from "./components/portfolio/ContactMe";
import Footer from "./components/portfolio/Footer";

// Base API URLs for various requests
// const baseUrl = "https://jsonplaceholder.typicode.com";
// const bitCoinURL = "https://api.coindesk.com/v1/bpi/currentprice.json";
// const myEmployee = "http://localhost:3000/api/users";

// TypeScript interfaces for type safety
// interface Post {
//   id: number;
//   title: string;
// }

// interface Coin {
//   time: {
//     updated: string;
//     updatedISO: string;
//     updateduk: string;
//   };
//   bpi: {
//     USD: {
//       rate: string;
//     };
//   };
//   disclaimer: string;
// }

// interface Employee {
//   _id: number;
//   email: string;
//   username: string;
//   password: string;
//   createdAt: Date;
//   updatedAt: Date;
// }

export default function Home() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  return (
    <main className="flex flex-col  ">
      <Hero />
      <div className="flex flex-col sm:flex-row  ">
        <AboutMe />
        <Education />
      </div>
      <Skills />
      <Experience />
      <Projects />
      <ContactMe />
      <Footer />
    </main>
  );
}
