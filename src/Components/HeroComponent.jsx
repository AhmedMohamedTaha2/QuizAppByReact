import React from "react";
import { FaReact } from "react-icons/fa6";
import Buttoon from "./Button";

export default function HeroComponent({dispatch}) {
  return (
    <div className="w-full min-h-screen flex items-center justify-center b">
      <div className="container  px-10 py-12 flex flex-col items-center gap-6">
        <FaReact className="text-blue-400 text-8xl animate-spin-slow drop-shadow-lg font-extrabold" />
        <h1
          style={{ fontFamily: "'Bitcount Grid Double', sans-serif" }}
          className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-center"
        >
          ReactJs
          <span className="block text-white/80 text-4xl font-semibold mt-2">
            Quiz App
          </span>
        </h1>
        <p className="text-gray-300 text-lg mt-2 text-center max-w-md font-bold">
          Test your React knowledge with these challenging questions !
        </p>
        <Buttoon dispatch={dispatch} />
      </div>
    </div>
  );
}
