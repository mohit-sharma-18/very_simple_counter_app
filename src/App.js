import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [colorCode, setColorCode] = useState("");
  const countVal = document.getElementById("countVal");

  let colorHandler = (colorCode = "#") => {
    let alpha = ["A", "B", "C", "D", "E", "F"];
    for (let i = 0; i < 3; i++) {
      colorCode += Math.floor(Math.random() * 10);
      colorCode += alpha[Math.floor(Math.random() * alpha.length)];
    }
    setColorCode(() => colorCode);
    return colorCode;
  };

  let toggleHandler = () => {
    countVal.style.visibility !== "hidden"
      ? (countVal.style.visibility = "hidden")
      : (countVal.style.visibility = "visible");
  };
  let resetHandler = () => {
    setCount(() => 0);
  };
  let addHandler = () => {
    setCount((e) => e + 1);
    countVal.style.color = colorCode;
  };
  let minHandler = () => {
    count < 1 ? setCount(() => 0) : setCount((e) => e - 1);
    countVal.style.color = colorCode;
  };

  useEffect(() => {
    if (count % 10 === 0) {
      colorHandler();
    }
  }, [count]);

  return (
    <div className="App">
      <h1 id="countVal">{count}</h1>
      <button onClick={addHandler}>+</button>
      <button onClick={minHandler}>-</button>
      <button onClick={resetHandler}>Reset</button>
      <button onClick={toggleHandler}>Toggle</button>
    </div>
  );
}
