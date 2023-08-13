import React from "react";

export default function FaseLogin({ onNext }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    if (!username) {
      alert("Silahkan isi nama Anda");
      return;
    }

    onNext(username);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-200">
      <div className="flex items-center w-[900px]">
        <div className="rounded-l-2xl bg-blue-500 p-8 py-16">
          <h1 className="text-6xl text-white font-bold">Welcome</h1>
          <p className="text-white text-lg font-semibold mt-8">
            Rekomendasi Profesi Berdasarkan Behaviour (RIASEC TEST). Silakan isi
            data diri Anda dengan benar!
          </p>
        </div>

        <div className="bg-white h-[350px] w-[600px] rounded-2xl shadow-2xl p-8">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="username" className="text-xl font-bold">
              Nama
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="bg-gray-100 px-4 py-2 rounded-lg border border-gray-600 mt-4"
            />
            <button
              type="submit"
              id="submit"
              className="bg-blue-600 py-3 px-4 rounded-lg text-white mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
