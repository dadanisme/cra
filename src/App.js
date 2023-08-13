import { useState } from "react";
import Fasepertanyaan from "./FasePertanyaan";
import FaseLogin from "./FaseLogin";
import FaseResult from "./FaseResult";

function App() {
  const [fase, setFase] = useState(1);
  const [name, setName] = useState("");
  const [result, setResult] = useState("");

  if (fase === 1) {
    return (
      <FaseLogin
        onNext={(name) => {
          setName(name);
          setFase(2);
        }}
      />
    );
  }

  if (fase === 2) {
    return (
      <Fasepertanyaan
        onNext={(result) => {
          setResult(result);
          setFase(3);
        }}
      />
    );
  }

  return (
    <FaseResult
      name={name}
      result={result}
      onNext={() => {
        setFase(1);
        setName("");
        setResult("");
      }}
    />
  );
}

export default App;
