import { useEffect } from "react";

const ModalContactForm = ({ isOpen, onClose, pageInfo, user }) => {
  const { header3, formKey } = pageInfo;
  const { logo } = user;

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
      <div className="absolute inset-0 bg-[var(--background-color)] dark:bg-[var(--background-color)] opacity-90 overflow-hidden">
        {/* Floating Code Symbols */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[var(--border-color)] opacity-40 text-xl font-mono"
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
      <div className="relative bg-[var(--profile-bg)] text-[var(--text-color)] rounded-xl shadow-2xl border-2 border-[var(--border-color)]
      p-6 w-full max-w-lg transform transition-all scale-95 opacity-0 animate-fadeInUp">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-[var(--secondary-color)] hover:text-[var(--primary-color)] text-2xl font-bold"
        >
          ✕
        </button>

        {/* Modal Title */}
        <h2 className="mb-5 text-3xl font-title text-center text-[var(--primary-color)] flex items-center justify-center">
          {header3}
        </h2>

        {/* Form */}
        <form action={formKey} method="POST" className="space-y-4">
          <label className="block text-sm font-medium text-[var(--text-color)]">Your Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-3 rounded-lg border border-[var(--border-color)] bg-[var(--background-color)] text-[var(--text-color)]
            shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] transition-all duration-200"
          />

          <label className="block text-sm font-medium text-[var(--text-color)]">Your Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-3 rounded-lg border border-[var(--border-color)] bg-[var(--background-color)] text-[var(--text-color)]
            shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] transition-all duration-200"
          />

          <label className="block text-sm font-medium text-[var(--text-color)]">Message</label>
          <textarea
            name="message"
            required
            className="w-full p-3 rounded-lg border border-[var(--border-color)] bg-[var(--background-color)] text-[var(--text-color)]
            shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] transition-all duration-200"
          ></textarea>

          {/* Send Button */}
          <button
            type="submit"
            className="w-full px-5 py-3 text-lg font-semibold text-white
            bg-[var(--button-bg)] dark:bg-[var(--button-bg-dark)]
            rounded-lg shadow-md transition-transform duration-300
            hover:scale-105 hover:bg-[var(--button-hover)] dark:hover:bg-[var(--button-hover-dark)]"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* 🔹 Floating Code Symbols Keyframes */}
      <style>
        {`
          @keyframes floatCode {
            0% {
              transform: translateY(100vh) scale(0.8);
              opacity: 0.2;
            }
            50% {
              opacity: 0.5;
            }
            100% {
              transform: translateY(-10vh) scale(1);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ModalContactForm;
