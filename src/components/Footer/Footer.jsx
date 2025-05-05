import React from "react";
import { SocialLinks } from "../SocialLinks";

const Footer = ({ name, pageInfo }) => {
  const currentYear = new Date().getFullYear();
  const { startYear, footerMessage, LinkedIn, GitHub } = pageInfo;

  return (
    <footer className="p-6 text-center shadow-md bg-transparent border-t border-[var(--border-color)]">
      {/* COPYRIGHT MESSAGE */}
      <p className="text-md font-bold">
        &copy; {startYear} {currentYear > startYear ? `- ${currentYear} ${name}` : ""} {name} — {footerMessage}
      </p>

      {/* Social Links */}
      <SocialLinks linkedin={LinkedIn} github={GitHub} className="justify-center mt-3" />
    </footer>
  );
};

export default Footer;
