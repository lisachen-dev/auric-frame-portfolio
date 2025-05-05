import React, { useState, useEffect } from "react";
import { BackToTop } from "../BackToTop";
import { ThemeToggle } from "../ThemeToggle";

const NavBar = ({ pageInfo }) => {
  const { header1, header2, header3 } = pageInfo;

  return (
    <>
      <div className="fixed w-full bg-[#E0AA3E] text-[#241F2A] text-sm px-4 py-2 text-center border-b border-[#C18F2D] z-50">
        🚀 This is the second iteration demo (open-source) of my original portfolio. My work has improved since this posting!&nbsp;
        <a
          href="https://www.lisachenworks.com/"
          className="underline font-semibold hover:text-[#161219] transition"
        >
          Visit my latest portfolio →
        </a>
      </div>
      <nav
            className="fixed top-20 left-1/2 transform -translate-x-1/2 w-[85%] max-w-xl
           bg-[var(--background-color)] dark:bg-[var(--background-color)] bg-opacity-95 backdrop-blur-md py-2 px-5
           rounded-lg shadow-md flex justify-between items-center font-body z-50 transition-all duration-300
           border border-[var(--border-color)] dark:border-[var(--border-color)]"
          >
            <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm tracking-wider text-center w-full">
              {[
                { name: header1, link: "#about" },
                { name: header2, link: "#projects" },
                { name: header3, link: "#contact" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="relative group flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-105"
                >
                  <a
                    href={item.link}
                    className="text-[var(--text-color)] dark:text-[var(--text-color)]
                      transition-all duration-300 ease-in-out px-3 py-1 rounded-md flex items-center justify-center
                      h-full min-h-[40px] leading-none
                      hover:bg-[var(--primary-color)] dark:hover:bg-[var(--primary-color)]
                      hover:text-white dark:hover:text-gray-900
                      hover:ring-2 hover:ring-[var(--primary-color)] dark:hover:ring-[var(--primary-color)]
                      transition-colors duration-300 ease-in-out"
                  >
                    {item.name}
                    <span
                      className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[var(--primary-color)] dark:bg-[var(--primary-color)]
                       transition-all duration-500 ease-out group-hover:w-full group-hover:left-0"
                    ></span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <BackToTop />
            </div>
          </nav>
    </>
  );
};

export default NavBar;
