import React from "react";
import { SocialLinks } from "../SocialLinks";

const Header = ({ user, pageInfo, setIsModalOpen }) => {
  const { name, title, languages, profilePic, profilePicAlt, experience } = user;
  const { LinkedIn, GitHub } = pageInfo;

  return (
    <header className="mx-auto max-w-4xl px-6 md:px-6 py-10 md:py-6">
      <div
        className="p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 mx-4 md:mx-8 lg:mx-16"
      >

        {/* ✅ Name, Title, and Call to Action */}
        <div className="max-w-lg flex flex-col items-center md:items-start space-y-3">
          {/* 🔹 Name */}
          <h1 className="text-4xl md:text-5xl font-heading text-[var(--primary-color)] dark:text-[var(--primary-color)] drop-shadow-md">
            {name}
          </h1>

          {/* 💼 Job Title */}
          <h2 className="text-2xl md:text-3xl font-title text-[var(--text-color)] dark:text-[var(--text-color)] drop-shadow-md">
            {title}
          </h2>

          {/* 🔎 Open to Work / Current Company */}
          {experience.currentCompany && (
            <a
              href={LinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="my-3 text-lg font-semibold text-[var(--text-color)] dark:text-[var(--text-color)] px-4 py-2 bg-[var(--border-color)] dark:bg-[var(--border-color)]
                bg-opacity-80 rounded-lg shadow-md text-center transition-transform duration-200 hover:scale-110 hover:drop-shadow-md
                hover:bg-[var(--primary-color)] dark:hover:bg-[var(--primary-color)] hover:text-white dark:hover:text-[var(--background-color)]"
            >
              {experience.currentCompany.toLowerCase() === "unemployed" ? (
                <>🔎 Open to Opportunities</>
              ) : (
                <>🛠️ {experience.currentCompany}</>
              )}
            </a>
          )}

          {/* 🌐 Social Links */}
          <SocialLinks linkedin={LinkedIn} github={GitHub} className="my-3" />

          {/* 🔹 Languages - Moved to Bottom */}
          {languages.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2 justify-center md:justify-start">
              {languages.map((lang, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 text-sm font-medium text-[var(--text-color)] dark:text-[var(--text-dark)] border border-[var(--border-color)] dark:border-[var(--border-dark)] rounded-md"
                >
                  {lang}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Profile Photo */}
            <div
              className="flex flex-col items-center space-y-3 p-6"
            >
              <img
                src={profilePic}
                alt={profilePicAlt}
                onClick={() => setIsModalOpen(true)}
                className="w-44 md:w-56 h-auto shadow-xl border-4 border-[var(--border-color)]
                dark:border-[var(--border-color)] bg-transparent p-1 ring-4 ring-[var(--border-color)]
                dark:ring-[var(--border-color)] "
                loading="lazy"
              />
            </div>

      </div>
    </header>

  );
};

export default Header;
