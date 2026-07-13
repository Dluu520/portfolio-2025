// import Image from "next/image";
"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "@/app/ui/hero.module.css";

function Hero() {
  const [isSticky, setIsSticky] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentHero = heroRef.current;

    if (!currentHero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(currentHero);

    return () => {
      observer.unobserve(currentHero);
    };
  }, []);

  return (
    <div
      id="home"
      ref={heroRef}
      className={`relative flex h-screen w-full snap-center items-center justify-center overflow-hidden ${styles.hero}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-blue-950/70" />

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center px-6 text-center sm:px-8 lg:px-12">
        <div className="mb-4 rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-[0.3em] text-blue-200">
          Full-Stack Developer • Aspiring Data Analyst
        </div>

        <h1 className="text-4xl font-extrabold tracking-wide text-white drop-shadow-lg sm:text-5xl md:text-7xl lg:text-8xl">
          Dong Luu
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg md:text-xl">
          I build thoughtful web experiences and enjoy turning ideas into
          practical digital products with clean code, strong UX, and a growing
          data-driven mindset.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a href="#projects">
            <button className="rounded-full border border-blue-400 bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 sm:text-base">
              View Projects
            </button>
          </a>
          <a href="mailto:dong.luu520@gmail.com">
            <button className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20 sm:text-base">
              Contact Me
            </button>
          </a>
          <a
            href="Dong Luu -  Fullstack Developer Resume 2026.pdf"
            download="Dong Luu -  Fullstack Developer Resume 2026.pdf"
          >
            <button className="rounded-full border border-slate-300/40 bg-slate-900/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:text-base">
              Download Resume
            </button>
          </a>
        </div>

        <div
          className={`${
            isSticky
              ? "fixed top-0 z-20 flex w-full items-center justify-center bg-slate-950/95 px-4 py-3 shadow-lg"
              : "relative mt-8"
          } flex flex-wrap justify-center gap-3`}
        >
          {isSticky ? (
            <div className="flex w-full flex-col items-center justify-between gap-3 px-2 py-1 sm:flex-row sm:px-6 lg:px-10">
              <div className="hidden gap-3 sm:flex">
                <a href="#about">
                  <button className="rounded-full border border-slate-600 px-4 py-2 text-sm text-white transition hover:border-white hover:bg-white hover:text-slate-900">
                    About
                  </button>
                </a>
                <a href="#projects">
                  <button className="rounded-full border border-slate-600 px-4 py-2 text-sm text-white transition hover:border-white hover:bg-white hover:text-slate-900">
                    Projects
                  </button>
                </a>
                <a href="mailto:dong.luu520@gmail.com">
                  <button className="rounded-full border border-slate-600 px-4 py-2 text-sm text-white transition hover:border-white hover:bg-white hover:text-slate-900">
                    Contact
                  </button>
                </a>
              </div>

              <a
                href="Dong Luu -  Fullstack Developer Resume 2026.pdf"
                download="Dong Luu -  Fullstack Developer Resume 2026.pdf"
              >
                <button className="rounded-full border border-slate-600 px-4 py-2 text-sm text-white transition hover:border-white hover:bg-white hover:text-slate-900">
                  Download Resume
                </button>
              </a>
            </div>
          ) : null}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <svg
          className="h-8 w-8 text-blue-300"
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
      </a>
    </div>
  );
}

export default Hero;
