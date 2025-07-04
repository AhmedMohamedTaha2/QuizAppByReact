import React from "react";

export default function ErrorComponent({ error }) {
  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
    <div className="flex items-center justify-center ">
      <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 border-l-8 border-blue-400 shadow-2xl rounded-2xl px-8 py-6 max-w-lg w-full animate-bounce-in">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl animate-pulse">💥</span>
          <h2 className="text-2xl font-bold text-white drop-shadow">
            Oops! Something went wrong
          </h2>
        </div>
        <p className="text-lg text-blue-100 font-medium mb-2 animate-fade-in">
          {error?.message || String(error)}
        </p>
        <div className="mt-2 text-sm text-blue-200/80">
          Please try refreshing the page or contact support if the issue
          persists.
        </div>
      </div>
      <style>
        {`
          @keyframes bounce-in {
            0% { transform: scale(0.8) translateY(40px); opacity: 0; }
            60% { transform: scale(1.05) translateY(-10px); opacity: 1; }
            80% { transform: scale(0.97) translateY(2px);}
            100% { transform: scale(1) translateY(0);}
          }
          .animate-bounce-in {
            animation: bounce-in 0.7s cubic-bezier(.68,-0.55,.27,1.55);
          }
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in {
            animation: fade-in 1s ease;
          }
        `}
      </style>
    </div>
    </div>

  );
}
