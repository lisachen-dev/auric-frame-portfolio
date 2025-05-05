import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-10 h-10 flex items-center justify-center rounded-full
        bg-[var(--button-bg)] dark:bg-[var(--button-bg-dark)] shadow-lg border border-[var(--border-color)]
        transition-transform duration-300 hover:scale-110 hover:bg-[var(--button-hover)] dark:hover:bg-[var(--button-hover-dark)]
        focus:outline-none"
      >
        <ArrowUp size={24} className="text-white dark:text-white" />
      </button>
    )
  );
};

export default BackToTop;
