// import Image from "next/image";
"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "@/app/ui/hero.module.css";

function Hero() {
  const [isSticky, setIsSticky] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  return (
    <div
      id="home"
      ref={heroRef}
      className={`relative snap-center h-screen w-full flex items-center justify-center overflow-hidden ${styles.hero} `}
    >
      <div className="absolute inset-0 bg-black/50" id="home" />
      {/* Hero Text */}
      <div className="relative z-10 text-center flex flex-col items-center w-full p-8 gap-6 animate-fadeIn">
        <h1 className="text-5xl md:text-8xl font-extrabold text-white tracking-wide drop-shadow-lg">
          Dong Luu
        </h1>
        <h3 className="text-xl md:text-3xl text-blue-400 font-medium tracking-wider">
          Software Engineer
        </h3>

        {/* Buttons */}
        <div
          className={`${
            isSticky
              ? "fixed top-0  z-20 p-3 w-full flex justify-center items-center bg-gray-950"
              : "relative mt-4"
          } flex gap-4`}
        >
          {isSticky ? (
            <div className="flex justify-between w-full px-10">
              <div className="flex gap-3">
                <a href="#about">
                  <button className="text-white text-sm md:text-base border-2 border-gray-400 px-6 py-2 rounded-xl hover:bg-white hover:border-white hover:text-black transition duration-300 shadow-md">
                    About
                  </button>
                </a>
                <a href="#projects">
                  <button className="text-white text-sm md:text-base border-2 border-gray-400 px-6 py-2 rounded-xl hover:bg-white hover:border-white hover:text-black transition duration-300 shadow-md">
                    Projects
                  </button>
                </a>
                <a href="#contact">
                  <button className="text-white text-sm md:text-base border-2 border-gray-400 px-6 py-2 rounded-xl hover:bg-white hover:border-white hover:text-black transition duration-300 shadow-md">
                    Contact
                  </button>
                </a>
              </div>
              <a
                href="Dong Luu 2025 Resume Updated.pdf"
                download="Dong Luu 2025 Resume Updated.pdf"
              >
                <button className="text-white text-sm md:text-base border-2 border-gray-400 px-6 py-2 rounded-xl hover:bg-white hover:border-white hover:text-black transition duration-300 shadow-md">
                  Download Resume
                </button>
              </a>
            </div>
          ) : (
            <a
              href="Dong Luu 2025 Resume Updated.pdf"
              download="Dong Luu 2025 Resume Updated.pdf"
            >
              <button className="text-white text-sm md:text-base border-2 border-gray-400 px-6 py-2 rounded-xl hover:bg-white hover:border-white hover:text-black transition duration-300 shadow-md">
                Download Resume
              </button>
            </a>
          )}
          {/* <a href="mailto:dongluudev@gmail.com">
            <button className="text-white text-sm md:text-base border-2 border-gray-400 px-6 py-2 rounded-xl hover:bg-white hover:border-white hover:text-black transition duration-300 shadow-md">
              Contact Me
            </button>
          </a> */}
        </div>
      </div>
      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <svg
          className="w-8 h-8 text-blue-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </a>{" "}
      {/* <Image
          src={
            "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={1500}
          height={100}
          alt="Hero Image"
        /> */}
    </div>
  );
}

export default Hero;
