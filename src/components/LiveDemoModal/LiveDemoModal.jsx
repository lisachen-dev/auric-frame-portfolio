import { useEffect } from "react";

const LiveDemoModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      {/* ✅ ANIMATED BACKGROUND CONTAINER */}
      <div className="absolute inset-0 bg-[var(--background-color)] opacity-90 overflow-hidden">
        {/* Floating Code Symbols */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[var(--secondary-color)] text-xl font-mono"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `floatCode ${5 + Math.random() * 5}s infinite ease-in-out`,
              transform: `scale(${0.8 + Math.random() * 0.6}) rotate(${Math.random() * 360}deg)`,
            }}
          >
            {["{}", "()", "<>", "return;", "const", "if()", "// TODO", "===", "!==", "[ ]", "<!>", "+=", "=>"].sort(() => Math.random() - 0.5)[0]}
          </div>
        ))}
      </div>

      {/* ✅ MODAL BOX */}
      <div className="relative bg-[var(--profile-bg)] text-[var(--primary-color)] rounded-xl shadow-2xl border-2 border-[var(--border-color)]
      p-6 w-full max-w-lg transform transition-all scale-95 opacity-0 animate-fadeInUp">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-[var(--secondary-color)] hover:text-[var(--primary-color)] text-2xl font-bold"
        >
          ✕
        </button>

        {/* Modal Title */}
        <h2 className="text-2xl font-title text-center text-[var(--secondary-color)] mb-4">
          You're Already Here! 🎉
        </h2>
        <p className="mt-2 text-center text-[var(--text-color)]">
          This portfolio is the project itself.
        </p>

        {/* Confirm Button */}
        <button
          onClick={onClose}
          className="mt-4 w-full px-5 py-3 text-lg font-semibold text-white
          bg-[var(--button-bg)] dark:bg-[var(--button-bg-dark)]
          rounded-lg shadow-md transition-transform duration-300
          hover:scale-105 hover:bg-[var(--button-hover)] dark:hover:bg-[var(--button-hover-dark)]"
        >
          Got it!
        </button>
      </div>

      {/* 🔹 Floating Code Symbols Keyframes */}
      <style>
        {`
          @keyframes floatCode {
            0% {
              transform: translateY(100vh) scale(0.8);
              opacity: 0.7;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: translateY(-10vh) scale(1);
              opacity: 0.6;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LiveDemoModal;
