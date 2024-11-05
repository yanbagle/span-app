import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // {percentage: 0}
  const [bars, setBars] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const addNewBar = () => {
    const barCopy = [...bars];
    barCopy.push({ percentage: 0 });
    setBars(barCopy);
    if (!activeIndex) {
      setActiveIndex(0);
    }
  };

  // francisco@span.io

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }
    const id = setInterval(() => {
      setBars((bars) => {
        const barsCopy = [...bars];
        if (activeIndex > barsCopy.length - 1) {
          return bars;
        }
        if (barsCopy[activeIndex]["percentage"] === 100) {
          setActiveIndex(activeIndex + 1);
        }
        barsCopy[activeIndex]["percentage"]++;
        return barsCopy;
      });
    }, 20);

    return () => {
      clearInterval(id);
    };
  }, [activeIndex]);

  return (
    <div className="App">
      <h1>title</h1>
      <button onClick={addNewBar}>add bar</button>
      {bars.map((bar, index) => {
        const { percentage } = bar;
        return (
          <div key={index} className="progress-bar">
            <div
              className="progress"
              style={{ width: `${percentage}px` }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
