import { useRef } from "react";

const pertanyaan = [
  "Senang Beraktifitas/bekerja diluar ruangan/pekerja lapangan",
  "80% Beraktifitas/bekerja dengan laptop/PC",
  "Apakah menurut anda berat beras 1kg tidak sama dengan berat kapas 1kg",
  "Apakah menurut anda, dengan membeli sabun kemasan 100gr lebih mengirit ketika anda membeli sabun kemasan 1kg",
  "Terkadang Anda merasa nyaman bekerja sendiri dalam memecahkan suatu permasalahan",
  "Anda menyenangi rutinitas kerja didalam/diluar ruangan dengan ritme 8 jam perhari dan setiap hari",
  "Anda memiliki banyak teman",
  "Anda adalah seorang yang memiliki kemampuan berkomunikasi yang baik",
  "Anda adalah seorang yang memiliki rasa percaya diri yang tinggi serta mudah beradaptasi",
  "Anda adalah seorang yang ambisius",
  "Anda seringkali tidak ontime dalam bekerja",
  "Anda seringkali dalam bekerja bergantung pada orang lain",
];

export default function Fasepertanyaan({ onNext }) {
  const form = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // get all data based on name
    const data = new FormData(form.current);
    const dataObj = Object.fromEntries(data.entries());

    const answArr = Object.values(dataObj).map((item) => parseInt(item));
    if (answArr.length < pertanyaan.length) {
      alert("Silahkan isi semua pertanyaan");
      return;
    }

    const result = await fetch(
      "https://jellyfish-app-ngzec.ondigitalocean.app/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(answArr),
      }
    ).then((res) => res.json());

    onNext(result.result);
  };
  return (
    <div className="bg-blue-400 min-h-screen flex flex-col items-center p-8">
      <h1 className="text-white text-4xl font-bold">
        TEST REKOMENDASI PROFESI
      </h1>
      <p className="text-gray-50">
        Indikator : 1 Sangat Tidak Setuju, 5 Sangat Setuju
      </p>
      <form onSubmit={handleSubmit} ref={form} className="mt-8">
        <ol className="grid gap-4">
          {pertanyaan.map((item, index) => (
            <QuestionItem question={item} index={index + 1} key={index} />
          ))}
        </ol>

        <button
          type="submit"
          id="submit"
          className="w-full bg-blue-600 py-3 px-4 rounded-lg text-white mt-8"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

function QuestionItem(props) {
  return (
    <li>
      <div className="bg-white p-3 rounded-xl shadow-lg">
        <p>{props.question}</p>
      </div>
      <div className="flex items-center justify-between mt-2 gap-2">
        {Array.from({ length: 5 }, (_, i) => i + 1).map((item) => (
          <div
            key={item}
            className="w-full flex items-center justify-center bg-white/50 rounded-lg px-3"
          >
            <label htmlFor={`radio${props.index}_${item}`} className="w-full">
              <span>{item}</span>
            </label>
            <input
              type="radio"
              id={`radio${props.index}_${item}`}
              name={`pertanyaan${props.index}`}
              value={item}
            />
          </div>
        ))}
      </div>
    </li>
  );
}
