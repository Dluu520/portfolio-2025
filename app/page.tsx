import Hero from "./components/portfolio/Hero";
import AboutMe from "./components/portfolio/AboutMe";
import Experience from "./components/portfolio/Experience";
import Education from "./components/portfolio/Education";
import Projects from "./components/portfolio/Projects";
import Skills from "./components/portfolio/Skills";
import ContactMe from "./components/portfolio/ContactMe";
import Footer from "./components/portfolio/Footer";

export default function Home() {
  return (
    <div className="flex flex-col  ">
      <Hero />
      <AboutMe />
      <Projects />
      {/* <Experience /> */}
      <ContactMe />
      <Footer />
    </div>
  );
}
