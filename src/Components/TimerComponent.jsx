import React, { useEffect, useState } from "react";

export default function TimerComponent({ timer, dispatch, status }) {
  const [timeLeft, setTimeLeft] = useState(timer);

  // Reset timer when a new timer value is passed (e.g., on quiz restart)
  useEffect(() => {
    setTimeLeft(timer);
  }, [timer]);

  useEffect(() => {
    if (status === "active" && timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else if (timeLeft <= 0 && status === "active") {
      dispatch({ type: "FINISH_QUIZ" });
    }
  }, [status, timeLeft, dispatch]);

  return (
    <div className="flex flex-col items-center m-0 p-0">
      <span className="text-gray-600 font-semibold">Time Left</span>
      <span
        className={`bg-gray-100 px-2 py-1 rounded text-lg font-mono ${
          timeLeft < 180 ? "text-red-600" : "text-gray-600"
        }`}
      >
        {Math.floor(timeLeft / 60)}:{("0" + (timeLeft % 60)).slice(-2)}
      </span>
    </div>
  );
}
