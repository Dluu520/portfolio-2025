import React from "react";
import styles from "@/app/ui/footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <div className="snap-center flex flex-col h-auto justify-center items-center bg-[#f5f5f5] ">
      <div className="flex w-full h-20  p-4 justify-center gap-10 text-[#1a202c]">
        <a
          className="hover:cursor-pointer text-[#1a202c]"
          href="https://github.com/Dluu520 "
        >
          Github
        </a>
        <a
          className="hover:cursor-pointer text-[#1a202c]"
          href="https://www.linkedin.com/in/dong-luu-fl/"
        >
          LinkedIn
        </a>
        {/* <a className="hover:cursor-pointer" href="/">
          Portfolio
        </a> */}
      </div>
      <Link
        href="/#home"
        className={`${styles.arrowUp}  text-lg font-bold mb-10 hover:cursor-pointer text-[#1a202c]`}
      ></Link>
    </div>
  );
}

export default Footer;
