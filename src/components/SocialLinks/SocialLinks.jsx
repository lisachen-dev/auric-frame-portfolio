import React from "react";
import { Github, Linkedin } from "lucide-react";

const SocialLinks = ({ linkedin, github, className = "" }) => {
  return (
    <div className={`flex space-x-4 ${className}`}>

      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-[var(--primary-color)]
          transition-transform duration-200 hover:scale-110 hover:text-[var(--secondary-color)]"
        >
          <Linkedin size={24} />
          <span className="hidden md:inline">LinkedIn</span> {/* Text Hidden on Mobile */}
        </a>
      )}

      {/* GitHub */}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-[var(--primary-color)]
          transition-transform duration-200 hover:scale-110 hover:text-[var(--secondary-color)]"
        >
          <Github size={24} />
          <span className="hidden md:inline">GitHub</span> {/* Text Hidden on Mobile */}
        </a>
      )}
    </div>
  );
};

export default SocialLinks;
