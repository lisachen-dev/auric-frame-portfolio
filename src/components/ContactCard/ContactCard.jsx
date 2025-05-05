import React from "react";
import { SocialLinks } from "../SocialLinks";

const ContactCard = ({ isModalOpen, setIsModalOpen, pageInfo, user }) => {
  const { header3, contactMessage, LinkedIn, GitHub } = pageInfo;
  const { logo } = user;

  return (
    <div
      id="contact"
      className="relative mx-auto max-w-3xl bg-[var(--profile-bg)] p-8 rounded-lg shadow-2xl border-2 border-[var(--border-color)]"
    >
      {/* Title with Logo */}
      <h2 className="text-3xl font-title text-center flex items-center justify-center gap-2 text-[var(--primary-color)] dark:text-[var(--primary-color)] drop-shadow-md">
        <a href={LinkedIn}><img
          src={logo}
          alt="logo"
          className="w-15 h-auto rounded-full shadow-xl object-contain animate-softGlow transition-transform duration-300 hover:scale-110 hover:shadow-lg animate-softGlow"
        /></a>
        {header3}
      </h2>

      {/* Contact Message */}
      <p className="text-md text-[var(--text-color)] text-center mt-2">
        {contactMessage}
      </p>

      {/* Contact Button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 text-lg font-semibold text-white
          bg-[var(--button-bg)] dark:bg-[var(--button-bg-dark)]
          rounded-full shadow-md transition-transform duration-300
          hover:scale-105 hover:bg-[var(--button-hover)] dark:hover:bg-[var(--button-hover-dark)] animate-softGlow"
        >
          Contact Me 📩
        </button>
      </div>

      {/* Social Links */}
      <div className="flex justify-center">
        <SocialLinks linkedin={LinkedIn} github={GitHub} className="justify-center mt-4" />
      </div>
    </div>
  );
};

export default ContactCard;
