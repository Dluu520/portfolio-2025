"use client";
import Hero from "./components/portfolio/Hero";
import AboutMe from "./components/portfolio/AboutMe";
import Experience from "./components/portfolio/Experience";
import Education from "./components/portfolio/Education";
import Projects from "./components/portfolio/Projects";
import QASection from "./components/portfolio/QASection";
import ContactMe from "./components/portfolio/ContactMe";
import Footer from "./components/portfolio/Footer";

export default function Home() {
  return (
    <div className="relative flex h-full w-full flex-col">
      <div className="z-10">
        <Hero />
        <AboutMe />
        <Experience />
        <Projects />
        {/* <QASection /> */}
        <Education />
        <ContactMe />
        <Footer />
      </div>
    </div>
  );
}
