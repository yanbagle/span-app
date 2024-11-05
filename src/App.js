import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [percentage, setPercentage] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let intervalId;
    if (start) {
      intervalId = setInterval(() => {
        setPercentage((percentage) => {
          if (percentage === 100) {
            return percentage;
          }
          return percentage + 1;
        });
      }, 10);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [start]);

  return (
    <div className="App">
      <h1>title</h1>
      <button
        onClick={() => {
          setStart(true);
        }}
      >
        start
      </button>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${percentage}px` }}></div>
      </div>
    </div>
  );
}

export default App;
