import { useState } from "react";
import "./App.css";
import MainMenu from "./Compoents/MainMenu";
import Quiz from "./Compoents/Quiz";
import EndScreen from "./Compoents/EndScreen";
import { QuizContext } from "./Helpers/Context";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore]=useState(0);
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
