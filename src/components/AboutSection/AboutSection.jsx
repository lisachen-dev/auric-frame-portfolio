import { useState } from "react";

const AboutSection = ({ user, pageInfo }) => {
  const { LinkedIn, header1 } = pageInfo;
  const {
    avatar,
    avatarAlt,
    aboutTagline,
    aboutMe
  } = user;

  return (
    <section
      id="about"
      className="relative mx-auto max-w-4xl p-10 flex flex-col items-center justify-center gap-6 mt-16 mb-16 px-6 md:px-12"
    >

      {/* 🏆 Section Header */}
      <h2 className="relative text-4xl font-heading text-center drop-shadow-md mb-6">
        {header1}
        <span className="absolute -bottom-2 left-1/2 w-20 h-[3px] bg-[var(--border-color)] transform -translate-x-1/2"></span>
      </h2>

      {/* 🏆 Two-Column Layout */}
      <div className="w-full flex flex-col items-center">
        {/* Profile Image */}
        <div className="mb-4">
          <a href={LinkedIn}><img
            src={avatar}
            alt={avatarAlt}
            className="w-40 h-auto max-h-40 rounded-full shadow-xl border-2 border-[var(--border)] dark:border-[var(--border)] object-cover animate-softGlow transition-transform duration-300 hover:scale-110 hover:shadow-lg"
          /></a>
        </div>

        {/* ✅ About Tagline - No More Gradient */}
        <div className="w-1/2 text-center">
          <p className="relative italic font-semibold text-lg text-[var(--primary)] dark:text-[var(--secondary)] dark:shadow-md dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            {aboutTagline}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="w-full space-y-6 text-lg leading-relaxed mt-6 text-center px-4 animate-fadeInUp">

      {/* About Me */}
        {aboutMe.map((para, index) => (
        <p key={index} className="text-lg leading-relaxed text-[var(--light)] dark:text-[var(--dark)]">
          <span className="text-2xl font-semibold text-[var(--first-letter-light)] dark:text-[var(--first-letter-dark)] first-letter:pr-1 first-letter:font-bold first-letter:text-3xl">
            {para.letter}
          </span>
          {para.paragraph}
        </p>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
