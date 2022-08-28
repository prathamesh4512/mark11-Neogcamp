import { useState } from "react";
import "./styles.css";

export default function App() {
  const [dob, setDob] = useState("");
  const [luckyNum, setLuckyNum] = useState("");
  const [luck, setLuck] = useState("");

  function checkLuck() {
    if (dob && luckyNum) {
      let sum = 0;
      let newDob = dob.replaceAll("-", "");
      for (let digit of newDob) {
        sum = sum + Number(digit);
      }
      sum % luckyNum
        ? setLuck(`${luckyNum} is not that lucky 😕`)
        : setLuck(`${luckyNum} is a lucky number!! 🥳`);
    } else {
      setLuck("Enter both the fields to check luck 😅");
    }
  }

  return (
    <div className="App">
      <nav>
        <h1 class="header">Is your Birthday Lucky? 🤔</h1>
      </nav>

      <main>
        <label for="date-of-birth">Date Of Birth</label>
        <input
          type="date"
          name="date-of-birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <small>we are not storing your data</small>
        <br />
        <label for="lucky-number">Lucky Number</label>
        <input
          type="number"
          name="lucky-number"
          value={luckyNum}
          onChange={(e) => setLuckyNum(e.target.value)}
          placeholder="Enter your lucky number"
        />
        <small>we are not storing your data</small>
        <br />
        <button onClick={checkLuck}>Am I lucky?</button>

        <h3>{luck}</h3>
      </main>
    </div>
  );
}
