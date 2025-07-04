import React from "react";
import TimerComponent from "./TimerComponent";

export default function NavbarComponent({
  status,
  score,
  maxScore,
  dispatch,
  timer,
}) {
  function handleRestart() {
    dispatch({ type: "start" });
  }
  return (
    <nav className="w-screen flex items-center justify-around m-0 p-3 border-b border-gray-200 bg-white shadow-none">
      <div className="w-full md:w-5/6 flex flex-col md:flex-row items-center md:justify-between">
        {/* Logo */}
        <div className="flex items-center m-0 p-0 mb-4 md:mb-0">
          <span
            onClick={handleRestart}
            className="text-2xl font-extrabold text-gray-900 tracking-wide cursor-pointer"
          >
            React<span className="text-blue-600">Js</span> Quiz
          </span>
        </div>
        {/* Score, Time & Submit */}
        <div className="flex flex-row items-center gap-4 m-0 p-0">
          <div className="flex flex-col items-center m-0 p-0">
            <span className="text-gray-600 font-semibold">Score</span>
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-lg font-mono">
              <span className="text-green-600">{score}</span>/{maxScore}
            </span>
          </div>
          <TimerComponent timer={timer} dispatch={dispatch} status={status} />
        </div>
      </div>
    </nav>
  );
}
