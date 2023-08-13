import React from "react";

export default function FaseResult({ name, result, onNext }) {
  return (
    <div className="min-h-screen bg-blue-400 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-center border-b-2 pb-4 border-b-black">
          Hasil Test
        </h1>
        <p className="text-xl mt-4 text-center">
          Halo, {name}! Hasil tes kamu adalah:
        </p>
        <p className="text-5xl font-bold mt-4 text-center">{result}</p>

        <button
          onClick={onNext}
          className="bg-blue-600 py-3 px-4 rounded-lg text-white mt-8 w-full"
        >
          Ulangi Tes
        </button>
      </div>
    </div>
  );
}
