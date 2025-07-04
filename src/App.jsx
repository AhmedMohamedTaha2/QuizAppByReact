import React, { useEffect, useReducer } from "react";
import "./App.css";
import HeroComponent from "./Components/HeroComponent";
import QuestionComponent from "./Components/QuestionComponent";
import LoadingComponent from "./Components/LoadingComponent";
import ErrorComponent from "./Components/ErrorComponent";
import NavbarComponent from "./Components/NavbarComponent";
import ResultComponent from "./Components/ResultComponent";
import ShowingAnswers from "./Components/ShowingAnswers";
import FooterComponent from "./Components/FooterComponent";

const initialState = {
  questions: [],
  noQuestions: 0,
  // start , loading, error,  active, finished
  status: "start",
  currentQuestion: 0,
  error: null,
  selectedAnswers: [],
  score: 0,
  maxScore: 0,
  timer: 0, // Timer state if needed
};

function reducer(state, action) {
  switch (action.type) {
    case "loading": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "dataRecived": {
      return {
        ...state,
        questions: action.payload,
        status: "active",
        noQuestions: action.payload.length,
        maxScore: action.payload.reduce((acc, curr) => {
          return acc + curr.points;
        }, 0),
        currentQuestion: 0, // <-- Fix: start from the first question
        selectedAnswers: [],
        score: 0,
        timer: action.payload.length * 80,
      };
    }
    case "error": {
      return {
        ...state,
        status: "error",
        error: action.payload,
      };
    }
    case "SUBMIT_ANSWER": {
      const currentQuestion = state.questions[state.currentQuestion];
      let newScore = state.score;
      if (currentQuestion.answer === action.payload.selected) {
        newScore += currentQuestion.points;
      }
      // If last question, finish quiz
      if (state.currentQuestion + 1 === state.noQuestions) {
        return {
          ...state,
          selectedAnswers: [...state.selectedAnswers, action.payload.selected],
          score: newScore,
          status: "finished",
          currentQuestion: 0,
          timer: 0, // Reset timer when quiz finishes
        };
      }
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        selectedAnswers: [...state.selectedAnswers, action.payload.selected],
        score: newScore,
      };
    }
    case "FINISH_QUIZ": {
      return {
        ...state,
        status: "finished",
        currentQuestion: 0,
        timer: 0, // Reset timer when quiz finishes
      };
    }
    case "CHECK_ANSWERS": {
      return {
        ...state,
        status: "CHECK_ANSWERS",
        timer: 0, // Reset timer if needed
      };
    }
    case "RESTART_QUIZ": {
      return {
        ...initialState,
        status: "loading", // or "start" if you want to show the start screen
      };
    }
    case "start": {
      return {
        ...initialState,
        status: "start",
      };
    }
    case "SUBMIT_ANYWAY": {
      return {
        ...state,
        status: "finished",
        currentQuestion: 0,
        timer: 0, // Reset timer when quiz finishes
      };
    }
    default: {
      return state;
    }
  }
}

function App() {
  const [
    {
      questions,
      status,
      currentQuestion,
      error,
      score,
      noQuestions,
      maxScore,
      selectedAnswers,
      timer,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    if (status === "loading") {
      // Fetch questions from the JSON server
      fetch("http://localhost:3001/questions")
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched questions:", data);
          dispatch({ type: "dataRecived", payload: data });
        })
        .catch((error) => {
          console.error("Error fetching questions:", error);
          dispatch({ type: "error", payload: error });
        });
    }
  }, [status]);

  return (
    <>
      <div className="App w-screen overflow-x-hidden h-screen  bg-gradient-to-br from-gray-900 via-gray-950 to-blue-900 flex flex-col items-center p-0 m-0">
        {status == "start" && <HeroComponent dispatch={dispatch} />}
        {status == "loading" && <LoadingComponent />}
        {status == "error" && <ErrorComponent error={error} />}
        {status == "active" && (
          <NavbarComponent
            timer={timer}
            dispatch={dispatch}
            status={status}
            score={score}
            maxScore={maxScore}
          />
        )}
        {status == "active" && (
          <QuestionComponent
            noQuestions={noQuestions}
            question={questions[currentQuestion]}
            dispatch={dispatch}
            score={score}
            maxScore={maxScore}
            status={status}
          />
        )}

        {status === "finished" && (
          <NavbarComponent
            timer={timer}
            dispatch={dispatch}
            status={status}
            score={score}
            maxScore={maxScore}
          />
        )}
        {status === "finished" && (
          <ResultComponent
            dispatch={dispatch}
            score={score}
            maxScore={maxScore}
          />
        )}
        {status === "CHECK_ANSWERS" && (
          <ShowingAnswers
            dispatch={dispatch}
            questions={questions}
            selectedAnswers={selectedAnswers}
            score={score}
            maxScore={maxScore}
          />
        )}
      </div>
      <FooterComponent />
    </>
  );
}

export default App;
