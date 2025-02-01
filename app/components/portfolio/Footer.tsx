import React from "react";
import Link from "next/link";
import Certifications from "./Certification"; // Import the Certifications component

function Footer() {
  return (
    <footer className="flex flex-col items-center bg-gray-900 text-white">
      {/* Certifications Section */}
      <Certifications />
      {/* Social Links */}
      <div className="flex w-full h-20 p-4 justify-center gap-10">
        <a
          href="https://github.com/Dluu520"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/dong-luu-fl/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          LinkedIn
        </a>
      </div>
      {/* Back to Top Arrow */}
      <Link
        href="/#home"
        className="text-lg font-bold mb-10 hover:text-blue-500 transition-colors duration-300"
      >
        ↑ Back to Top
      </Link>
      {/* <Link
        href="/#home"
        className={`${styles.arrowUp}  text-lg font-bold mb-10 hover:cursor-pointer text-[#1a202c]`}
      ></Link> */}
    </footer>
  );
}

export default Footer;
