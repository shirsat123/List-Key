import { useState } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState(["Sonali", "Sarika", "Sidhhi", "Komal"]);
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <h1>List Component</h1>
      <ul>
        {state.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ul>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={(e) => {
          setState([...state, ...[input]]);
          setInput("");
        }}
      >
        Add user
      </button>
    </div>
  );
}
