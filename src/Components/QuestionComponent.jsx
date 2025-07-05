import React, { useState } from "react";

export default function QuestionComponent({
  dispatch,
  question,
  noQuestions,
  currentQuestionIndex,
}) {
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  if (!question) {
    return null;
  }

  const options = question.options || [];

  // Enhanced handleSubmit to support "Submit Anyway"
  const handleSubmit = (force = false) => {
    if (selected !== null || force) {
      setShowResult(true);
      setTimeout(() => {
        dispatch({
          type: "SUBMIT_ANSWER",
          payload: {
            selected: force ? null : selected,
          },
        });
        setSelected(null);
        setShowResult(false);

        if (Number(currentQuestionIndex + 1) === Number(noQuestions)) {
          dispatch({
            type: "FINISH_QUIZ",
          });
        }
      }, 1000);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-gray-950 to-blue-700 px-2 py-4 sm:py-8 md:py-12 relative">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-2xl px-2 sm:px-4 md:px-8 lg:px-12 py-4 sm:py-8 md:py-12 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col items-center gap-4 sm:gap-6 md:gap-8 border border-white/20 transition-all duration-300">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between mb-2 gap-2">
          <p className="text-base sm:text-lg md:text-xl font-semibold text-white tracking-wide drop-shadow flex-1 text-center sm:text-left">
            Question
            <span className="text-blue-400 font-bold ml-2">
              {currentQuestionIndex + 1}
            </span>
            <span className="text-white/70 font-medium">/ {noQuestions}</span>
          </p>
          <div className="flex items-center gap-2 justify-center sm:justify-end">
            <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-xs sm:text-sm text-white/60">Active</span>
          </div>
        </div>

        <h2 className="w-full text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white text-center drop-shadow mb-2 break-words">
          {question.question}
        </h2>

        <ul className="w-full flex flex-col gap-3 sm:gap-4 md:gap-5 my-2 sm:my-4 md:my-6">
          {options.map((option, idx) => {
            let optionClass = "";
            if (showResult) {
              if (idx === question.answer) {
                optionClass =
                  "bg-gradient-to-r from-green-500/80 to-green-700/80 text-white border-green-400 shadow-lg";
              } else if (idx === selected) {
                optionClass =
                  "bg-gradient-to-r from-red-500/80 to-red-700/80 text-white border-red-400 shadow-lg";
              } else {
                optionClass = "bg-white/10 text-gray-200 border-white/20";
              }
            } else {
              optionClass =
                selected === idx
                  ? "bg-gradient-to-r from-blue-700 to-blue-500 text-white border-blue-400 shadow-xl scale-105 ring-2 ring-blue-300"
                  : "bg-white/10 text-gray-200 border-white/20 hover:bg-blue-700/80 hover:text-white hover:scale-105 hover:shadow-xl";
            }

            return (
              <li
                key={idx}
                onClick={() => !showResult && setSelected(idx)}
                tabIndex={0}
                className={`
                  group cursor-pointer px-3 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl border-2
                  text-base sm:text-lg md:text-xl font-semibold select-none
                  transition-all duration-300 ease-out
                  outline-none focus:ring-4 focus:ring-blue-400/40
                  ${optionClass}
                  relative overflow-hidden
                `}
              >
                <span className="relative z-10 break-words">{option}</span>
                {/* Ripple effect */}
                <span className="absolute inset-0 opacity-0 group-active:opacity-20 group-active:bg-blue-200 transition duration-300 rounded-2xl"></span>
              </li>
            );
          })}
        </ul>

        <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4">
          <button
            className={`
              flex-1 px-4 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold 
              text-base sm:text-lg tracking-wide
              bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700
              text-white shadow-xl transition-all duration-300
              hover:from-blue-700 hover:to-blue-800 hover:scale-105 hover:shadow-2xl
              active:scale-95
              disabled:opacity-50 disabled:cursor-not-allowed
              focus:outline-none focus:ring-4 focus:ring-blue-400/40
              disabled:hover:from-blue-600 disabled:hover:to-blue-700 disabled:hover:scale-100 disabled:hover:shadow-2xl
            `}
            disabled={selected === null || showResult}
            onClick={() => handleSubmit()}
          >
            {Number(currentQuestionIndex + 1) === Number(noQuestions)
              ? "Finish Quiz"
              : "Submit Answer"}
          </button>

          {/* Submit Anyway button always finishes the quiz */}
          {selected === null && !showResult && (
            <button
              className={`
                flex-1 px-4 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg tracking-wide
                bg-gradient-to-r from-red-500 via-red-400 to-red-600
                text-white shadow-xl transition-all duration-300
                hover:from-red-600 hover:to-red-700 hover:scale-105 hover:shadow-2xl
                active:scale-95
                focus:outline-none focus:ring-4 focus:ring-red-400/40
              `}
              onClick={() => {
                dispatch({
                  type: "SUBMIT_ANSWER",
                  payload: { selected: null },
                });
                dispatch({ type: "FINISH_QUIZ" });
              }}
            >
              Finish Anyway
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
