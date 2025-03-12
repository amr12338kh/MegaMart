import { useEffect, useState } from "react";

export const AnimatedCheckCircle = () => {
  const [circleProgress, setCircleProgress] = useState(0);
  const [checkProgress, setCheckProgress] = useState(0);

  useEffect(() => {
    requestAnimationFrame(() => {
      setCircleProgress(100);
    });

    const checkTimer = setTimeout(() => {
      setCheckProgress(100);
    }, 400);

    return () => clearTimeout(checkTimer);
  }, []);

  return (
    <div className="h-16 w-16 relative mx-auto mb-4">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          className="text-gray-200"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r="42"
          cx="50"
          cy="50"
        />
        <circle
          className="text-green-500 transition-all duration-700 ease-out"
          strokeWidth="8"
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="42"
          cx="50"
          cy="50"
          strokeDasharray="264"
          strokeDashoffset={264 - (264 * circleProgress) / 100}
        />
      </svg>

      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          className="text-green-500 transition-all duration-500 ease-out"
          d="M28,50 L45,65 L72,35"
          strokeDasharray="100"
          strokeDashoffset={100 - (100 * checkProgress) / 100}
        />
      </svg>
    </div>
  );
};
