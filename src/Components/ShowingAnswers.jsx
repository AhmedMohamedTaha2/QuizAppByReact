import React from "react";

export default function ShowingAnswers({
  questions,
  selectedAnswers,
  score,
  maxScore,
  dispatch
}) {
  // Emoji for score summary
  const getScoreEmoji = () => {
    const percent = (score / maxScore) * 100;
    if (percent === 100) return "🏆";
    if (percent >= 80) return "🎉";
    if (percent >= 50) return "👍";
    if (percent > 0) return "🙂";
    return "😅";
  };

  // Emoji for each answer
  const getAnswerEmoji = (isCorrect) => (isCorrect ? "✅" : "❌");

  function handleTryAgain() {
    dispatch({ type: "start" });
  }

  return (
    <div className="w-full flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
        Quiz Results
      </h1>
      <p className="text-lg text-white mb-6 flex items-center gap-2">
        You scored <span className="font-bold">{score}</span> out of{" "}
        <span className="font-bold">{maxScore}</span>
        {getScoreEmoji()}
      </p>
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl p-6 rounded-lg shadow-lg">
        <ul className="space-y-4">
          {(Array.isArray(questions) ? questions : []).map(
            (question, index) => {
              const isCorrect = selectedAnswers[index] === question.answer;
              return (
                <li key={index} className="p-4 bg-gray-800 rounded-lg">
                  <h2 className="text-xl font-semibold text-blue-400 mb-2 flex items-center gap-2">
                    Q{index + 1}: {question.question}
                  </h2>
                  <p
                    className={`text-lg flex items-center gap-2 ${
                      isCorrect ? "text-green-400" : "text-red-400"
                    } font-extrabold`}
                  >
                    {getAnswerEmoji(isCorrect)}
                    <span className="text-gray-100 font-semibold">
                      Your answer: {question.options[selectedAnswers[index]]}
                    </span>
                  </p>
                  <p className="text-lg text-blue-500 flex items-center gap-2">
                    <span>Correct answer:</span>
                    <span className="text-emerald-300 font-semibold">
                      {question.options[question.answer]} 🎯
                    </span>
                  </p>
                </li>
              );
            }
          )}
        </ul>
         <button
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 hover:from-blue-800 hover:to-cyan-500 text-white font-semibold mt-4 shadow-xl transition-all duration-200 "
        style={{
          width: "100%",
          maxWidth: 320,
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          fontSize: "1.13rem",
          letterSpacing: "0.5px",
          padding: "1.1rem 2.4rem",
          borderRadius: "2.2rem 0.7rem 2.2rem 0.7rem", // Asymmetrical pill
          border: "none",
          boxShadow: "0 4px 18px 0 rgba(59,130,246,0.18)",
          outline: "none",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.15s, box-shadow 0.15s, background 0.2s",
        }}
        onMouseDown={e => e.currentTarget.style.transform = "scale(0.97)"}
        onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        onClick={handleTryAgain}
      >
         Try Again
      </button>
      </div>
    </div>
  );
}
