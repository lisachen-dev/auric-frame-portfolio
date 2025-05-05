import React from "react";

const Divider = ({ flip = false }) => {
  return (
    <div className="relative mt-5 my-8 flex items-center justify-center w-full">
      <svg
        width="100%"
        height="50"
        viewBox="0 0 200 50"
        className={`${flip ? "" : "scale-x-[-1]"}`}
      >
        <defs>
          {/* ✅ Gradient that adapts to theme colors */}
          <linearGradient id="iceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--primary-color)" stopOpacity="0.2" />
            <stop offset="25%" stopColor="var(--secondary-color)" stopOpacity="0.8" />
            <stop offset="50%" stopColor="var(--primary-color)" stopOpacity="1" />
            <stop offset="75%" stopColor="var(--secondary-color)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--primary-color)" stopOpacity="0.2" />
          </linearGradient>

          {/* ✅ Snowflake pattern for fun detail */}
          <pattern id="snowflakes" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="white" opacity="0.6" />
            <circle cx="8" cy="6" r="1.0" fill="white" opacity="0.5" />
            <circle cx="5" cy="9" r="0.8" fill="white" opacity="0.4" />
          </pattern>
        </defs>

        {/* ✅ Smooth Snow Drift Path */}
        <path
          d="M 0 35 C 40 15, 160 50, 200 35"
          stroke="url(#iceGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="transparent"
        />

        {/* ✅ Overlay snowflakes within the curve */}
        <path
          d="M 0 35 C 40 15, 160 50, 200 35"
          fill="url(#snowflakes)"
          opacity="0.8"
        />
      </svg>
    </div>
  );
};

export default Divider;
