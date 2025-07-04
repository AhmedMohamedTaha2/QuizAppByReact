import React from "react";

export default function ResultComponent({dispatch, score, maxScore }) {
  const percentage = (score / maxScore) * 100;
  const isPassed = percentage >= 50;

  // 5 situations for result
  let resultMessage = "";
  let titleEmoji = "";
  let progressEmoji = "";

  if (percentage < 20) {
    resultMessage = "😵‍💫 You might want to review the material and try again!";
    titleEmoji = "💔";
    progressEmoji = "😢";
  } else if (percentage < 40) {
    resultMessage = "😬 Not quite there. Keep practicing!";
    titleEmoji = "😕";
    progressEmoji = "😟";
  } else if (percentage < 60) {
    resultMessage = "🙂 You're getting closer! A bit more effort!";
    titleEmoji = "🙂";
    progressEmoji = "👍";
  } else if (percentage < 80) {
    resultMessage = "😃 Good job! You're almost a pro!";
    titleEmoji = "😃";
    progressEmoji = "👏";
  } else if (percentage < 100) {
    resultMessage = "🤩 Excellent! Just a tiny step from perfection!";
    titleEmoji = "🤩";
    progressEmoji = "🎉";
  } else {
    resultMessage = "🏆 Perfect score! You're a quiz master!";
    titleEmoji = "🏆";
    progressEmoji = "🥇";
  }

  const progressBg = "#e0e7ff";
  const progressColor = isPassed ? "#22c55e" : "#ef4444";
  const strokeWidth = 18;

  // Responsive circle size
  const circleSize = 220;
  const circleRadius = 96;

  function CheckingAnswers() {
    dispatch({ type: "CHECK_ANSWERS" });
  }
  // Handle button click to check answers
  function handleTryAgain() {
    dispatch({ type: "RESTART_QUIZ" });
  }

  return (
    <div
      className="result-component"
      style={{
        maxWidth: "420px", // Looks better on large screens
        width: "95vw",
        minWidth: 0,
        margin: "5vw auto",
        padding: "clamp(1.2rem, 4vw, 2.5rem) clamp(1rem, 5vw, 2.5rem)",
        borderRadius: "2rem",
        boxShadow: "0 8px 32px rgba(59,130,246,0.15)",
        background: "rgba(255,255,255,0.10)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        color: "#1e293b",
        textAlign: "center",
        fontFamily: "Inter, Arial, sans-serif",
        position: "relative",
        overflow: "visible",
      }}
    >
      <div
        style={{
          fontSize: "clamp(2rem, 6vw, 3.5rem)",
          marginBottom: "0.5rem",
        }}
      >
        {titleEmoji}
      </div>
      <h2
        style={{
          fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
          marginBottom: "0.5rem",
          color: isPassed ? "#22c55e" : "#ef4444",
          letterSpacing: "1px",
          fontWeight: 800,
        }}
      >
        {isPassed ? "Passed!" : "Failed"}
      </h2>
      <p
        style={{
          fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
          marginBottom: "2rem",
          color: "#fff",
        }}
      >
        {resultMessage}
      </p>
      {/* Circular Progress */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "min(70vw, 220px)",
            height: "min(70vw, 220px)",
            marginBottom: "0.5rem",
            minWidth: 120,
            minHeight: 120,
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox={`0 0 ${circleSize} ${circleSize}`}
            style={{ display: "block" }}
          >
            <circle
              cx={circleSize / 2}
              cy={circleSize / 2}
              r={circleRadius}
              stroke={progressBg}
              strokeWidth={strokeWidth}
              fill="none"
            />
            <circle
              cx={circleSize / 2}
              cy={circleSize / 2}
              r={circleRadius}
              stroke={progressColor}
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={2 * Math.PI * circleRadius}
              strokeDashoffset={
                2 * Math.PI * circleRadius * (1 - percentage / 100)
              }
              strokeLinecap="round"
              style={{
                transition: "stroke-dashoffset 0.8s cubic-bezier(.4,2,.6,1)",
              }}
            />
          </svg>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              color: progressColor,
              flexDirection: "column",
              userSelect: "none",
            }}
          >
            {progressEmoji}
            <span style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", color: "#fff" }}>
              {percentage.toFixed(1)}%
            </span>
          </div>
        </div>
        <div style={{ fontSize: "clamp(1.1rem, 2vw, 1.15rem)", color: "#fff" }}>
          Score: <b>{score}</b> / {maxScore}
        </div>
      </div>
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
      <button
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 hover:from-blue-800 hover:to-cyan-500 text-white font-semibold mt-4 shadow-xl transition-all duration-200"
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
        onClick={()=> CheckingAnswers()}>
        Check Your Answer
      </button>
    </div>
  );
}
