import { useState } from "react";
import "../App.css";
import { colors } from "../constants";
import Circles from "./Circles";
import Controls from "./Controls";

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const Board = () => {
  const [circles, setCircles] = useState([]);
  const [history, setHistory] = useState([]);
  const handleClick = (e) => {
    setCircles((prev) => {
      return [
        ...prev,
        {
          x: e.clientX,
          y: e.clientY,
          id: +new Date(),
          backgroundColor: getRandomColor(),
        },
      ];
    });
  };
  const hanedleRedo = () => {
    const copy = [...history];
   
      const lastHistory = copy.pop();
      setCircles((prev) => [...prev, lastHistory]);
      setHistory(copy);

    
  };
  const handleReset = () => {
    setCircles([]);
    setHistory([]);
  }
  const handleUndo = () => {
    const copy = [...circles];
    
      const lastCircle = copy.pop();
      setHistory((prev) => [...prev, lastCircle]);

      setCircles(copy);
    
  };
//   console.log(history);
  //   console.log(circles);
  return (
    <div className="board" onClick={handleClick}>
      <Controls
        hasHistory = {history.length>0}
        hasCircles = {circles.length>0}
        onUndo={handleUndo}
        onRedo={hanedleRedo} 
        onReset = {handleReset} />
      <Circles circles={circles} />
    </div>
  );
};

export default Board;
